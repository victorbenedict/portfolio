'use client';

import { useActiveSectionContext } from '@/context/ActiveSectionContextProvider';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillEnvelopeFill, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

export default function Intro() {
  const { ref } = useSectionInView('Home');
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className='mb-28 max-w-[50rem] text-center sm:mb-0'
      id='home'
      ref={ref}
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src='https://avatars.githubusercontent.com/u/103329136?v=4'
              alt='Victor Benedict'
              width='192'
              height='192'
              quality='80'
              priority={true}
              className='h-24 w-24 rounded-full border-[0.35rem] object-cover border-white shadow-xl'
            />
          </motion.div>
          <motion.span
            className='absolute bottom-0 right-0 text-4xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            ✌️
          </motion.span>
        </div>
      </div>
      <motion.h1
        className=' text-stone-900 mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        I am
        <span className='font-bold'> Victor Benedict</span>. A
        <span className='font-bold'> front-end developer</span>. My focus is{' '}
        <span className='underline'>React</span>(
        <span className='font-bold'>Next.js</span>).
      </motion.h1>
      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium '
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href='#contact'
          className='group bg-stone-700 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-stone-800 active:scale-105 transition'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me
          <BsFillEnvelopeFill className='group-hover:scale-110 transition' />{' '}
        </Link>
        <a
          className='group bg-white text-stone-950  border-black/10 p-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-stone-950 cursor-pointer hover:bg-stone-100 active:bg-stone-200 active:scale-105 transition'
          href='/Victor Benedict Bulaong Resume 2024.pdf'
          download
        >
          Download Resume{' '}
          <HiDownload className='group-hover:scale-110 transition ' />
        </a>
        <a
          className='bg-white text-stone-800 text-[1.35rem] border-black/10 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-stone-950 hover:bg-stone-100 active:bg-stone-200 cursor-pointer active:scale-110 transition'
          href='https://www.linkedin.com/in/victorbenedictb/'
          target='blank'
        >
          <BsLinkedin />
        </a>
        <a
          className='bg-white text-stone-800 text-[1.35rem]  border-black/10 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-stone-950 hover:bg-stone-100 active:bg-stone-200 cursor-pointer first-line:active:scale-110 transition'
          href='https://github.com/victorbenedict'
          target='blank'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
