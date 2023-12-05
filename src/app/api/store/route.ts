import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.error();
  }
  const prisma = new PrismaClient();
  const data = await prisma.store.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return NextResponse.json(data, { status: 200 });
}
