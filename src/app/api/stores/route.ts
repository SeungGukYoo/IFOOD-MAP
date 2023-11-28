import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/dist/server/web/spec-extension/response";

type Data = { name: string };
export async function GET() {
  const prisma = new PrismaClient();
  const stores = await prisma.store.findMany();
  return NextResponse.json({ data: stores });
}
