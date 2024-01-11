import Header from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/ActiveSectionContextProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Victor Benedict | Portfolio',
  description: 'Victor Benedict is a front-end developer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-stone-100 text-stone-950 relative pt-28 sm:pt-36`}
      >
        <div className='bg-[#99C7FB] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#A2E9C1] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2x1:left-[-5rem]'></div>
        <ActiveSectionContextProvider>
          {children}
          <Header />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
