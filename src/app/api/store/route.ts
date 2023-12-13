import { StoreType } from "@/app/page";
import prisma from "@/util/prismaClient";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.error();
  }
  const data = await prisma.store.findUnique({
    where: {
      id: parseInt(id),
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
  const { data }: { data: StoreType } = await req.json();
  const store = await prisma.store.update({
    where: {
      id: data.id,
    },
    data: data,
  });
  return NextResponse.json(store, { status: 204 });
}
