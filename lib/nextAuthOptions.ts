import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/MongodbClient";

export const authOptions: NextAuthOptions = {
  session: {
    // strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    GithubProvider({
      clientId: "Ov23li4joO6zty4nvUVx",
      clientSecret: "a0d31d7a26999283858683a4e432b46f5ed70d27",
    }),
    GoogleProvider({
      clientId:
      "128149732684-virhdnndeumrb2v15epd5qq87e00uqeb.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const client = await clientPromise;
        const db = client.db() as any;

        const user = await db
          .collection("users")
          .findOne({ email: credentials?.email });

        const bcrypt = require("bcrypt");

        const passwordCorrect = await bcrypt.compare(
          credentials?.password,
          user?.password
        );

        if (passwordCorrect) {
          return {
            id: user?._id,
            email: user?.email,
          };
        }

        console.log("credentials", credentials);
        return null;
      },
    }),
  ],
  
};
