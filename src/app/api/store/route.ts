import { auth } from "@/util/auth";
import prisma from "@/util/prismaClient";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface IStoreType {
  authorId?: number | null | undefined;
  phone?: string | null | undefined;
  address?: string | null | undefined;
  lat?: string | null | undefined;
  lng?: string | null | undefined;
  name?: string | null | undefined;
  category?: string | null | undefined;
  storeType?: string | null | undefined;
  foodCertifyName?: string | null | undefined;
}

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  const authInfo = await auth();

  if (!id) {
    return NextResponse.json({ message: "존재하지 않는 정보입니다." }, { status: 404 });
  }
  const prismaStoreOption: Prisma.StoreFindUniqueArgs = {
    where: {
      id: parseInt(id),
    },
    include: {
      comments: {
        include: {
          user: true,
        },
      },
    },
  };
  if (authInfo?.user.access_token?.sub) {
    prismaStoreOption.include = {
      ...prismaStoreOption.include,
      likes: {
        where: {
          userId: parseInt(authInfo?.user.access_token?.sub),
          storeId: parseInt(id),
        },
      },
    };
  }
  const data = await prisma.store.findUnique(prismaStoreOption);

  return NextResponse.json(data, { status: 200 });
}

export async function POST(req: Request) {
  const { data }: { data: IStoreType } = await req.json();
  const authInfo = await auth();
  const store = await prisma.store.create({
    data: {
      ...data,
      authorId: parseInt(authInfo?.user.access_token?.sub!),
    },
  });
  return NextResponse.json(store, { status: 201 });
}
export async function PUT(req: Request) {
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
