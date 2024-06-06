import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import createIssueSchema from "./createIssueSchema";

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Validate Create Issue data from the client
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  // Add new issue to the db
  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
