import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { connectDB } from "./lib/db";
import { User } from "./lib/models/User";
import { compare } from "bcryptjs";
import { formSchema } from "./lib/zodSchema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { username, password } = await formSchema.parse(credentials);

        if (!username || !password)
          throw new Error("Username and password are required");

        await connectDB();

        const user = await User.findOne({ username }).select("+password +role");

        if (!user) throw new Error("Invalid credentials");

        if (!user.password) throw new Error("Invalid credentials");

        const isValid = await compare(password, user.password);

        if (!isValid) throw new Error("Wrong password");

        const userData = {
          name: user.username,
          role: user.role,
          id: user._id,
        };

        return userData;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (token?.sub && token?.role) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
  },
});
