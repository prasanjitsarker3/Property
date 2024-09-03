import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = cookies().get("token")?.value;
  let decodedData = null;
  if (token) {
    decodedData = jwtDecode(token) as any;
  }
  console.log("Ckeing................", decodedData?.role);
  if (decodedData?.role === "admin") {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/admin"],
};
