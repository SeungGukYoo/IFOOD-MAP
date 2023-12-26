import { CommentDataObject } from "@/hooks/useComment";
import prisma from "@/util/prismaClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { data }: { data: CommentDataObject } = await req.json();
  const response = await prisma.comments.create({
    data: {
      storeId: data.storeId,
      content: data.content,
      userId: data.userId,
    },
  });

  console.log(response, "prisma response");
  return NextResponse.json({ data: response }, { status: 200 });
}
