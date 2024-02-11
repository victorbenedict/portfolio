import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeSwitch from "@/components/ThemeSwitch";
import ActiveSectionContextProvider from "@/context/ActiveSectionContextProvider";
import ThemeContextProvider from "@/context/Theme-context";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Victor Benedict | Portfolio",
  description: "Victor Benedict is a front-end developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-stone-100 pt-28 text-stone-950 dark:bg-stone-800 dark:text-stone-300 dark:text-opacity-90 sm:pt-36`}
      >
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#99C7FB] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
        <div className="2x1:left-[-5rem] absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#A2E9C1] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
