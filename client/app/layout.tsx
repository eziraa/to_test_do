import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";
import './globals.css';
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/providers/providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata: Metadata = {
  title: "Todo App",
  description: "Test Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
className={cn(
  "min-h-screen font-sans antialiased",
  fontSans.variable
)}      >
        <Toaster position="top-right" />
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
