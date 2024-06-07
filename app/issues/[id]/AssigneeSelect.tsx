"use client"; // Select is a client side component

/*
Since this is a client component, 
we dont have access to prisma (which is only available in the server side).
Instead to fetch user via an user api route.
*/

import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from '@/app/components/Skeleton'

const AssigneeSelect = () => {
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

  if (isLoading) return <Skeleton/>;

  if (error) return null;

  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign to" variant="soft" />
      <Select.Content position="popper">
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
