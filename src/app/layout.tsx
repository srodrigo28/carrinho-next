import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ProvedorCarrinho } from "@/data/contexts/ContextoCarrinho";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next Eletronic",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly< { children: React.ReactNode }> ) {
  
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        <ProvedorCarrinho>
            <header className="bg-slate-800 p-5 flex items-center justify-around">
              <Link href="/" className="
                  p-2 
                  w-20 
                  h-20 
                  flex 
                  flex-col 
                  items-center 
                  justify-center
                  rounded-full 
                  cursor-pointer
                  duration-300 
                  hover:scale-110 
                  bg-blue-600
                  hover:bg-green-700">
                <h2 className="text-white">A Z</h2>
                <img width={35} src="image/logo.png" alt="logo" />
              </Link>
              <Link href="/login" 
                className="
                bg-blue-600 p-2 px-5 rounded-md 
                hover:bg-green-700 text-white 
                  hover:scale-110 duration-300 hidden">
                    Login
                </Link>

                <Link href="/login" 
                className="
                bg-blue-600 p-2 px-5 rounded-md 
                hover:bg-green-700 text-white 
                  hover:scale-110 duration-300">
                    Login
                </Link>
            </header>
            {children}
        </ProvedorCarrinho>
      </body>
    </html>
  );
}
