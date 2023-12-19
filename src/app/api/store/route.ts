import { StoreType } from "@/app/page";
import { auth } from "@/util/auth";
import prisma from "@/util/prismaClient";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  const autoInfo = await auth();

  if (!id) {
    return NextResponse.json({ message: "존재하지 않는 정보입니다." }, { status: 404 });
  }
  const data = await prisma.store.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      likes: {
        where: autoInfo?.user.access_token?.sub
          ? { userId: parseInt(autoInfo?.user.access_token?.sub), storeId: parseInt(id) }
          : {},
      },
    },
  });

  return NextResponse.json(data, { status: 200 });
}

export async function POST(req: Request) {
  const { data } = await req.json();
  const store = await prisma.store.create({
    data,
  });
  return NextResponse.json(store, { status: 201 });
}
export async function PATCH(req: Request) {
  const { data } = await req.json();
  const store = await prisma.store.update({
    where: {
      id: data.id,
    },
    data: data,
  });
  return NextResponse.json(store, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.error();
  }
  await prisma.store.delete({
    where: {
      id: parseInt(id),
    },
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
