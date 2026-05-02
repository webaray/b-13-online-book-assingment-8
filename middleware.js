// Middleware is intentionally empty because protected pages are handled with the client-side PrivateRoute component.
// This avoids deployment errors when using MongoDB authentication logic in Edge Middleware.
export function middleware() {}

export const config = {
  matcher: []
};
