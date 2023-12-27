import { CommentDataObject } from "@/hooks/useComment";
import prisma from "@/util/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  const { data }: { data: CommentDataObject } = await req.json();
  const response = await prisma.comments.create({
    data: {
      storeId: data.storeId,
      content: data.content,
      userId: data.userId,
    },
  });
  return NextResponse.json({ data: response }, { status: 200 });
}
export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ data: "Forbidden" }, { status: 403 });
  }
  const response = await prisma.comments.delete({
    where: {
      id: parseInt(id),
    },
  });
  return NextResponse.json({ data: response }, { status: 200 });
}
