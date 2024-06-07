"use client"; // Select is a client side component

import { Select } from "@radix-ui/themes";

const AssigneeSelect = () => {
  return (
    <Select.Root >
      <Select.Trigger placeholder="Assign to" variant="soft" />
      <Select.Content position="popper">
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value="1">Mosh</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
