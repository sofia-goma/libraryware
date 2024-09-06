import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import OAuthProvider from "@/providers/oauth-provider";
import AuthProvider from "@/providers/auth-provider";
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
  title: "LibraryWare",
  description:
    "An innovative platform for managing and sharing your online library, making it easier to discover, bookmark, and discuss your favorite books.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <OAuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ConvexAuthNextjsServerProvider>
              <AuthProvider>{children}</AuthProvider>
            </ConvexAuthNextjsServerProvider>
            <ToastContainer />
          </ThemeProvider>
        </OAuthProvider>
      </body>
    </html>
  );
}
