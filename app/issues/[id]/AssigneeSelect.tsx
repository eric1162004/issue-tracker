"use client"; // Select is a client side component

/*
Since this is a client component, 
we dont have access to prisma (which is only available in the server side).
Instead to fetch user via an user api route.
*/

import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "@/app/components/Skeleton";
import toast, { Toaster } from "react-hot-toast";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000, // 60s
    retry: 3,
  });

  const { data: cachedIssue, refetch } = useQuery<Issue>({
    queryKey: [`issue${issue.id}`],
    queryFn: () => axios(`/api/issues/${issue.id}`).then((res) => res.data),
    initialData: issue,
    staleTime: 60 * 1000, // 60 s
  });

  if (isLoading) return <Skeleton />;

  if (error) return null;

  return (
    <>
      <Select.Root
        defaultValue={cachedIssue?.assignedToUserId || ""}
        onValueChange={(userId) => {
          axios
            .patch("/api/issues/" + cachedIssue?.id, {
              assignedToUserId: userId || null, // null = unassigned
            })
            .then(() => {
              refetch(); // refetch issue on assignee selection
            })
            .catch(() => {
              toast.error("Changes could not be saved.");
            });
        }}
      >
        <Select.Trigger placeholder="Assign to" variant="soft" />
        <Select.Content position="popper">
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value={null!}>Unassigned</Select.Item>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

export default AssigneeSelect;
