import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

export async function POST(req: Request) {
    // const { body } = req;
    // const { email, password } = body;
    // const { user } = await supabase.auth.signUp({
    //     email,
    //     password,
    // });
    // return {
    //     status: 200,
    //     body: {
    //     user,
    //     },
    // };

    try{
        const {name,email,password} = await req.json();
        // console.log(name,email,password);
        const hashedPassword= await bcrypt.hash(password,10);
        await connectMongoDB();
        await User.create({name:name,email:email,password:hashedPassword});
        return NextResponse.json({
            message:"User created successfully",
            status:200,
        })
    }
    catch(error){
        console.log(error);
        return NextResponse.json({
            message:"Something went wrong",
            status:500,
        })
    }
    
}