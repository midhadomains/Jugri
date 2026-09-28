import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const destination = new URL(
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
    "https://www.jugri.com",
  );

  return NextResponse.redirect(destination, 301);
}

export const config = {
  matcher: [
    {
      source: "/:path*",
      has: [{ type: "host", value: "jugri.vercel.app" }],
    },
  ],
};