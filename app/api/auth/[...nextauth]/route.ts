import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

const authOptions:AuthOptions = {
    providers: [
        GoogleProvider ({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                // const user = {id: '1'};
                const {email, password} = credentials;
                try{
                    await connectMongoDB();
                    const user = await User.findOne({email:email})
                    
                    if (!user){
                        return null;
                    }

                    const paswordsMatch = await bcrypt.compare(password, user.password);
                    if (!paswordsMatch){
                        return null;
                    }

                    return user;
                }catch(error){
                    console.log(error);
                    return null;
                }
            },
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages :{
        signIn: "/",
    },
            

};


const handler = NextAuth(authOptions);
export {handler as GET, handler as POST} ;