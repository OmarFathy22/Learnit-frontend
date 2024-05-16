import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions : NextAuthOptions = {
  providers:[
    GithubProvider({
      clientId:"Ov23li4joO6zty4nvUVx",
      clientSecret:"a0d31d7a26999283858683a4e432b46f5ed70d27"
    }),
    GoogleProvider({
      clientId:"128149732684-virhdnndeumrb2v15epd5qq87e00uqeb.apps.googleusercontent.com",
      clientSecret:"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"
    }),
    CredentialsProvider({
      name:"Credentials",
      credentials:{
        email:{},
        password:{}
      },
      async authorize(credentials , req){
        return null
      }
    })
  ]
}