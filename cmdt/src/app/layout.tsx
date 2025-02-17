import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import { Geist, Geist_Mono } from "next/font/google";
import { connectToMongoDB } from "../../db_services/db";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Complete Mobile Drug Testing",
  description: "A drug testing company based in Wisconsin, USA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  connectToMongoDB();
  //! useQuery ce koristiti pojedinacno Navbar, NavMenuMobile i Home Page
  return (
    <html lang="en" className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased 
        flex flex-col min-h-screen w-screen
        `}
      >
        <ReactQueryProvider>
          <header className="flex">
            <Navbar />
          </header>
          <main className="flex flex-grow bg-white">{children}</main>
          <Toaster />
          <footer className="flex">
            <Footer />
          </footer>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
