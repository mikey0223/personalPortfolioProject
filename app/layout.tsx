import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael | Personal Portfolio",
  description: "Michael is a student at Northwestern University Studying CS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-400 text-slate-900 relative pt-28 sm:pt-36 min-h-[200vh]` }>


        <Header />
   
        <div className="text-5xl text-center">Test</div>
        
        {children}
        
        </body>
      
    </html>
  );
}
