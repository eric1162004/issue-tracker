import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255),
  description: z
    .string({ required_error: "Description is required." })
    .min(1, "Description is required.")
    .max(65535),
});

// make the fields optional so we dont have to provide it in the resquest
export const patchIssueSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255).optional(),
  description: z
    .string({ required_error: "Description is required." })
    .min(1, "Description is required.")
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "AssingedToUserId is required.")
    .max(255)
    .optional()
    .nullable(), // so we can set null value to unassigned issues.
});
