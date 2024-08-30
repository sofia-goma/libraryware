import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import OAuthProvider from "@/lib/oauthProvider";
import AuthProvider from "@/lib/authProvider";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

// className={cn(
//   "min-h-screen bg-background font-sans antialiased",
//   fontSans.variable
// )}

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
      <OAuthProvider>
        <body
          className={inter.className}
        >
          <ConvexAuthNextjsServerProvider>
            <AuthProvider>{children}</AuthProvider>
          </ConvexAuthNextjsServerProvider>
          <ToastContainer />
        </body>
      </OAuthProvider>
    </html>
  );
}
