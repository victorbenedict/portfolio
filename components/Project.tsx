'use client';

import { projectsData } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className='group mb-3 sm:mb-8 last:mb-0'
    >
      <section className='bg-stone-100 max-w-[42rem] border border-black/15 rounded-xl overflow-hidden sm:pr-8 relative sm:h-[20rem] group-even:pl-8 hover:bg-stone-200 hover:border-stone-400 transition'>
        <div className='flex flex-col h-full pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] group-even:ml-[18rem]'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed text-stone-700'>{description}</p>
          <ul className='flex flex-wrap mt-auto gap-2'>
            {tags.map((tag, index) => (
              <li
                className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'
                key={index}
              >
                {tag}{' '}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt='Project I made'
          quality={90}
          className='absolute top-8 -right-40 w-[28.5rem] rounded-t-lg shadow-2xl transition group-hover:scale-105 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:right-[initial] group-even:-left-40 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2'
        />
      </section>
    </motion.div>
  );
}
