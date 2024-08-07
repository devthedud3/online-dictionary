import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Gloss",
  description: "The dictionary for developers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col items-center`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
