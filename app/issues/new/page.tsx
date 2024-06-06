"use client";

/*
Next.js's dynamic import to ensure that the react-simplemde-editor component 
is not included on the server side (SSR: Server Side Rendering) but only on the client side. 
This is important in cases where components are not compatible with server-side rendering.
*/
import dynamic from "next/dynamic";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaExclamationTriangle } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import createIssueSchema from "@/app/api/issues/createIssueSchema";
import { z } from "zod";
import ErrorMesssage from "@/app/components/ErrorMesssage";

// Infer type from the createIssueSchema
type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const router = useRouter();

  // A resolver is required to integrate React Form with Zod
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });

  const [error, setError] = useState("");

  return (
    <div className="max-w-xl">
      {/* Show Unexpected Server Error */}
      {error && (
        <Callout.Root color="red" role="alert" className="mb-5">
          <Callout.Icon>
            <FaExclamationTriangle />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("An unexpected error occurred.");
          }
        })}
      >
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        <ErrorMesssage>{errors.title?.message}</ErrorMesssage>

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE
              placeholder="Description"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <ErrorMesssage>{errors.description?.message}</ErrorMesssage>

        <Button>Submit new issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
