import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const preventHover = (event: any) => {
  const e = event as Event;
  if (window.innerWidth < 1024) e.preventDefault();
};
