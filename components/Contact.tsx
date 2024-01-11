'use client';

import { sendEmail } from '@/actions/sendEmail';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { RiMailSendLine } from 'react-icons/ri';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const { ref } = useSectionInView('Contact', 0.75);

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 w-[min(100%,38rem)] sm:mb-28 text-center scroll-mt-28'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className='text-stone-700 -mt-6'>
        Contact me directly at{' '}
        <a className='underline' href='mailto:victorbenedict.bulaong@gmail.com'>
          victorbenedict.bulaong@gmail.com
        </a>{' '}
        or fill out the form below
      </p>
      <form className='mt-10 flex flex-col' action={sendEmail}>
        <input
          className='h-14 rounded-lg boarder border-black/15 pl-4'
          name='senderEmail'
          type='email'
          placeholder='Your email'
          required
          maxLength={100}
        />
        <textarea
          className='h-52 my-3 rounded-lg border border-black/15 p-4'
          name='message'
          placeholder='Your message'
          required
          maxLength={500}
        ></textarea>
        <button
          type='submit'
          className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem]  bg-stone-700 text-white rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-stone-800 active:scale-105 transition'
        >
          Submit
          <RiMailSendLine className='transition-all group-hover:scale-105' />
        </button>
      </form>
    </motion.section>
  );
}
