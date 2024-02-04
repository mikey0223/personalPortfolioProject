
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer"
import { ThemeProvider, useTheme } from "@/components/themeProvider";
import ThemeButton from "@/components/themeToggle";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael | Personal Portfolio",
  description: "Michael is a student at Northwestern University Studying CS",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{

  return (
    
      <html lang="en">
        <ThemeProvider>
        <body className={`${inter.className}  relative pt-28 sm:pt-36` }>
          
          
          <Header />
          {children}
          <ThemeButton/>
          <Footer />
          
          
        </body>
        </ThemeProvider>
      </html>
    
  );
}
