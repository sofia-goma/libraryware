import { ReactNode } from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "librarywave web login",
    description: "a modern website for managing a online library's login or get started or sign in page ",
};

export default function LoginLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}