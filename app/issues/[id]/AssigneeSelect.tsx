"use client"; // Select is a client side component

import { User } from "@prisma/client";
/*
Since this is a client component, 
we dont have access to prisma (which is only available in the server side).
Instead to fetch user via an user api route.
*/

import { Select } from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";

const AssigneeSelect = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get<User[]>("/api/users");
      setUsers(data);
    };
    
    fetchUsers();
  }, []);

  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign to" variant="soft" />
      <Select.Content position="popper">
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          {users.map((user) => (
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
