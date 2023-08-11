"use client"
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
    const {data: session} = useSession();
    console.log(session);
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-md p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                User Info
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                <div>   
                    {session?.user?.name}    
                </div>               
                <div>
                    {session?.user?.email}
                </div>
                <img src={session?.user?.image} />
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <button
                            onClick={()=>signOut()}
                            className="ml-2 block text-sm text-gray-900"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
} 