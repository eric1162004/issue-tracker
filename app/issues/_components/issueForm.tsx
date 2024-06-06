"use client";

import createIssueSchema from "@/app/api/issues/createIssueSchema";
import ErrorMesssage from "@/app/components/ErrorMesssage";
import Spinner from "@/app/components/Spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { Issue } from "@prisma/client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaExclamationTriangle } from "react-icons/fa";
import { z } from "zod";

/*
react-simplemde-editor is a client component. Below we use Next.js's dynamic import 
to ensure that the component is not included on the server side (SSR: Server Side Rendering) 
but only on the client side.
*/
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

// Infer type from the createIssueSchema
type IssueFormData = z.infer<typeof createIssueSchema>;

interface Props {
  issue?: Issue; // issue is optional because it's only needed in the edit page
}

const IssueForm = ({ issue }: Props) => {
  // Redirect user back to Issues page
  const router = useRouter();

  // A resolver is required to integrate React Form with Zod
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(createIssueSchema),
  });

  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setError("An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  });

  return (
    <div className="max-w-xl">
      {/* display Unexpected Server Error */}
      {error && (
        <Callout.Root color="red" role="alert" className="mb-5">
          <Callout.Icon>
            <FaExclamationTriangle />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form className="space-y-3" onSubmit={onSubmit}>
        {/* Title input field */}
        <TextField.Root>
          <TextField.Input
            defaultValue={issue?.title}
            placeholder="Title"
            {...register("title")}
          />
        </TextField.Root>
        <ErrorMesssage>{errors.title?.message}</ErrorMesssage>

        {/* Markdown Editor */}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE
              placeholder="Description"
              value={issue?.description}
              onChange={field.onChange}
            />
          )}
        />
        <ErrorMesssage>{errors.description?.message}</ErrorMesssage>

        <Button disabled={isSubmitting}>
          Submit new issue {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
