export { auth as middleware } from "@/auth";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/consultation/:path*",
    "/analyzing/:path*",
    "/recommendations/:path*",
  ],
};