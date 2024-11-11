import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
<div style={{paddingLeft:"40%",background:"#b8cff5"}}>
<Link href="/" >Home</Link>
<Link href="/aboutUs" style={{paddingLeft:"10px"}}>AboutUs</Link>
<Link href="contactUs" style={{paddingLeft:"10px"}}>ContactUs</Link>
</div>

        {children}
      </body>
    </html>
  );
} 
