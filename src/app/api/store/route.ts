import prisma from "@/util/prismaClient";
import { PrismaClient } from "@prisma/client";
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
  console.log(store);

  return NextResponse.json(store, { status: 201 });
}
