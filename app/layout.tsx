import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Smile Dental Care | Your Smile, Our Priority",
  description: "Trusted family dental practice offering comprehensive care including cleanings, whitening, implants, and emergency services. Book your appointment today.",
  keywords: "dentist, dental care, teeth whitening, dental implants, family dentist, dental cleaning",
  openGraph: {
    title: "Smile Dental Care | Your Smile, Our Priority",
    description: "Trusted family dental practice offering comprehensive care. Book your appointment today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
