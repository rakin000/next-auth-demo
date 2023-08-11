'use client'

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";




export default function LoginForm() {   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string>();
    const router = useRouter();
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try{
            const res= await signIn("credentials", {
                email,password,redirect:false
            });

            if(res?.error){
                setError(res.error);
                return;
            }

            router.replace("dashboard");

        } catch(err:any){
            console.error(err);
            setError(err.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-md p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                Login To Your Account
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                <div>
                    <button
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"  
                            onClick={() => signIn("google") }
                        >
                            Sign in with Google
                        </button>
                </div>
                
                <form onSubmit={handleSubmit} className="mt-8 space-y-6 w-full" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="relative">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            required
                            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500"
                            placeholder="Email address"
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-indigo-500 peer-focus:text-sm"
                        >
                            Email address
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            id="password"  
                            name="password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                            required
                            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500"
                            placeholder="Password"
                        />
                        <label
                            htmlFor="password"
                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-indigo-500 peer-focus:text-sm"
                        >
                            Password
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember_me"
                                name="remember_me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember_me"
                                className="ml-2 block text-sm text-gray-900"
                            >
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <div>
                        {error && <p className="text-red-500 text-xs italic">{error}</p>
                        }
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"  
                            // onClick={() => { console.log();} }
                        >
                            Login
                        </button>
                        <Link
                            href="/register"
                            // type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"  
                            // onClick={() => { console.log();} }
                        >
                            Register 
                        </Link>
                    </div>
                </form>
            </div>
        </div>
        );
}