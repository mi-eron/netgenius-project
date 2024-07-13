import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import "@/styles/_global.scss";
import { Analytics } from "@vercel/analytics/react";

const share_tech_mono = Share_Tech_Mono({
    weight: "400",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "NetGenius | Home",
    description: "Next.js project by Mieron",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={share_tech_mono.className}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
