import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { Inter as FontSans } from "next/font/google";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import AuthProvider from "@/lib/authProvider";
import MyAuth0Provider from "@/lib/oauth";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sofia library web",
  description: "a modern website for managing a online library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <AuthProvider>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ConvexAuthNextjsServerProvider>
            <MyAuth0Provider>{children}</MyAuth0Provider>
          </ConvexAuthNextjsServerProvider>
          <ToastContainer />
        </body>
      </AuthProvider>
    </html>
  );
}
