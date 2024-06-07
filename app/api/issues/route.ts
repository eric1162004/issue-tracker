import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import authOptions from "@/app/auth/authOptions";
import { getServerSession } from "next-auth";
import { issueSchema } from "./issueSchema";

export async function POST(request: NextRequest) {
  // Allow authenticated users only
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const body = await request.json();

  // Validate Create Issue data from the client
  const validation = issueSchema.safeParse(body);
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
