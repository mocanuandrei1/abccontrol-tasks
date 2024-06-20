import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/custom ui/NavBar";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ABC Control",
  description: "ABC Control is a web application for managing ABC data.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <NavBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
