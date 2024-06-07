export { default } from "next-auth/middleware";

export const config = {
  // These are protected routes
  matcher: ["/issues/new", "/issues/edit/:id+"],
};
