import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { adminAuth } from "@/lib/interceptor/admin_content/axios";
const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@email.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        console.log(
          "login",
          credentials?.email,
          " and ",
          credentials?.password
        );
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required");
        }
        const res = await adminAuth.post("/employee_login/", {
          email: credentials?.email,
          password: credentials?.password,
        });

        console.log("res = ", res);

        if (!res.data.success) {
          console.log(res.data.message);
          throw new Error(res.data.message);
        }
        const user = await res.data.data;
        console.log(user);
        const token = await res.data.token;
        return { ...user, ...token };
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
  debug: process.env.NODE_ENV === "development",

  callbacks: {
    async jwt({ token, user, account }) {
      console.log(account);
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
