import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mb-10 px-4 text-center text-stone-600">
      <small className="mb-2 block text-xs">
        &copy; {currentYear} Victor Benedict. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website: </span>
        Built with React & Next.js, TypeScript, Tailwind CSS, Framer Motion,
        React Email & Resend. Hosted in Vercel.
      </p>
    </footer>
  );
}
