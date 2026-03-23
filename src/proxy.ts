import { NextRequest, NextResponse } from "next/server";

export async function proxy(req: NextRequest) {
  console.log('URL:->', req.url);
  return NextResponse.next();
};

export const config = {
  matcher: ["/api/:path*"],
};
