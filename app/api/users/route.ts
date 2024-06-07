import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

// if you remove the request parameter,
// nextjs will cache the output of this endpoint
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return NextResponse.json(users);
}
