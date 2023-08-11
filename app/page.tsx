import Image from 'next/image'
import LoginForm from '@/components/LoginForm'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react';

interface Props {
  session: Session | null ;
};

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <LoginForm />
      </main>
  )
}
// "use client"
// import {SessionProvider} from "next-auth/react"
// import type { AppProps } from "next/app";
// import type { Session } from "next-auth";
// import LoginForm from "@/components/LoginForm";

// // export const AuthProvider = ({ children }:{children:ReactNode }) => {
// //     return (
// //         <SessionProvider>{children}</SessionProvider>
// //     );  
// // }

// export default function App({
//     Component,
//     pageProps: { session, ...pageProps },
//   }: AppProps<{ session: Session }>) {
//     return (
//       <SessionProvider session={session}>
//         <Component {...pageProps} />
//         <LoginForm />
//       </SessionProvider>
//     )
//   }