import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "./_components/Navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js 15 Learning",
  description: "Learning Next.js 15 with JavaScript - App Router and Routing",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        {modal}
      </body>
    </html>
  );
}