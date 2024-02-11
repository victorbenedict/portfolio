import React from 'react';

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-stone-600'>
      <small className='mb-2 text-xs block'>
        &copy; 2030 Victor Benedict. All rights reserved.
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>About this website: </span>
        built with React & Next.js (App router & Server Actions), TypeScript,
        Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
