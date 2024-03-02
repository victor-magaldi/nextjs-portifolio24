import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const name = searchParams.get("name");

  return NextResponse.json({ message: `Hello, ${name}!` }, { status: 200 });
}
