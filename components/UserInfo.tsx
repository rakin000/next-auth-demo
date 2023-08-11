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
                <div className="relative">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500"
                        placeholder="Email address"
                        value={session?.user?.email as string}
                        disabled
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-indigo-500 peer-focus:text-sm"
                    >
                        Email address
                    </label>
                </div>
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