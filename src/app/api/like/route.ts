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
  const userId = req.nextUrl.searchParams.get("userId");
  if (!userId) {
    return NextResponse.json({ message: "로그인한 사용자만 접근이 가능합니다." }, { status: 401 });
  }
  const response = await prisma.like.findMany({
    where: {
      userId: parseInt(userId),
    },
    include: {
      store: true,
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
export async function DELETE(req: NextRequest) {
  const likeId = req.nextUrl.searchParams.get("likeId");
  if (!likeId) {
    return NextResponse.json({ message: "권한이 없습니다." }, { status: 403 });
  }
  await prisma.like.delete({
    where: {
      id: parseInt(likeId),
    },
  });
  return NextResponse.json({ status: 204 });
}
