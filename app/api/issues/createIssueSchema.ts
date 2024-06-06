import { z } from "zod";

const createIssueSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255),
  description: z
    .string({ required_error: "Description is required." })
    .min(1, "Description is required."),
});

export default createIssueSchema;
