import { auth } from "@/util/auth";
import prisma from "@/util/prismaClient";
import { NextRequest, NextResponse } from "next/server";

interface Response {
  id: number;
  storeId: number;
  userId: number;
  createdAt: Date;
}

export async function GET(req: NextRequest) {
  const storeId = req.nextUrl.searchParams.get("storeId");
  const authInfo = await auth();

  if (!authInfo) {
    return NextResponse.json({ message: "로그인한 사용자만 접근이 가능합니다." }, { status: 401 });
  }

  const response = await prisma.like.findFirst({
    where: {
      storeId: parseInt(storeId!),
      userId: parseInt(authInfo.user.access_token?.sub!),
    },
  });

  return NextResponse.json({ response }, { status: 200 });
}
export async function POST(req: Request) {
  const { storeId } = await req.json();
  const authInfo = await auth();
  if (!authInfo) {
    return {
      data: "로그인한 사용자만 찜하기를 할 수 있습니다.",
      status: "401",
    };
  }

  const likeData = {
    userId: parseInt(authInfo.user.access_token?.sub!),
    storeId: parseInt(storeId),
  };
  const response = await prisma.like.create({
    data: likeData,
  });

  return NextResponse.json({ response }, { status: 200 });
}
export async function DELETE(req: Request) {
  const { likeId } = await req.json();
  const authInfo = await auth();
  if (!authInfo) {
    return {
      data: "로그인한 사용자만 찜하기를 할 수 있습니다.",
      status: "401",
    };
  }

  const response = await prisma.like.delete({
    where: {
      id: likeId,
    },
  });

  return NextResponse.json({ response }, { status: 200 });
}
