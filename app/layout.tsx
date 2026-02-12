import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://victorbenedict-portfolio.vercel.app/"),
  title: {
    default: "Victor Benedict Bulaong",
    template: "%s | Victor Benedict Bulaong",
  },
  description: "Official website of Victor Benedict Bulaong.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Victor Benedict Bulaong",
    description: "Official website of Victor Benedict Bulaong.",
    url: "https://victorbenedict-portfolio.vercel.app/",
  },
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
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              borderRadius: "10px",
              background: "#1d293d",
              color: "#fff",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
