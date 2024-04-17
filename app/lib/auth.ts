import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import { db } from "./prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";


const authOptions: NextAuthOptions = {

    adapter: PrismaAdapter(db) as Adapter,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],
    callbacks: {
        async session({ session, user }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    role: user.role,
                }

            }
        }, 
    },

    secret: process.env.NEXT_AUTH_SECRET

};

export default authOptions;