import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/',
  },
  session: {
    maxAge: 3600
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/basket');

      if (isOnDashboard) {
        if (isLoggedIn) return true;

        return false;
      } else if (isLoggedIn) {
        return /* Response.redirect(new URL('/basket', nextUrl)) */;
      }
      return true;
    },
  },
  providers: []
} satisfies NextAuthConfig;
