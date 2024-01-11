'use client';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className='mb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        doloremque eligendi alias, deleniti animi nesciunt culpa? Ea, eum
        voluptatem. Dolore hic dolor ut vel quos officiis! Perspiciatis quia
        cumque illo! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quae beatae possimus nisi commodi incidunt recusandae deserunt aut
        consequatur ab! Alias odio itaque dolor ipsam impedit debitis deleniti
        atque! Et, quam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eum
        placeat. Neque, est sint similique ut libero deleniti fugit porro
        dolorum pariatur explicabo doloribus iure unde eligendi quae quas autem.
      </p>
    </motion.section>
  );
}
