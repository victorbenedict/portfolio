import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const preventHover = (event: React.PointerEvent<HTMLButtonElement>) => {
  if (window.innerWidth < 1024) event.preventDefault();
};

export const sectionStyle = 'lg:max-w-3xl p-4 lg:mx-auto mx-4 max-w-screen';
