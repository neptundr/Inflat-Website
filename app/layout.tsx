import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import {TTNormal, TT_C_Normal, TTMono} from "./fonts";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "InFlat – Swipe. Match. Move in!",
    description: "Your fastest way to find Home in HK",
    icons: {
        icon: "/favicon.ico",
    }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body
                className={`${TTNormal.variable} ${TT_C_Normal.variable} ${TTMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
