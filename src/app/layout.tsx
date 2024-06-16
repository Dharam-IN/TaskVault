import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskVault - Dharam App",
  description: "Create Your daily tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <ThemeProvider attribute="class">
            <div className="block">
              <Navbar />
            </div>
            {children}
            <div className="block">
              <Footer />
            </div>
            <Toaster />
          </ThemeProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
