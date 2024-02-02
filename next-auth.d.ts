import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      // data
      name: string;
      email: string;
      is_admin: boolean;
      is_staff: boolean;
      //
      access: string;
      refresh: string;
    };
    accessToken : string;
    refreshToken: string
  }
}
