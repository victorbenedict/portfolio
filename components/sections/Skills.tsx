import { skills } from '@/lib/data';
import { cn, sectionStyle } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function Skills() {
  return (
    <section id='skills' className={cn(sectionStyle)}>
      <h2 className='text-lg font-semibold'>Skills</h2>
      <div className='grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 py-4'>
        {skills.map((props, index) => {
          return (
            <Button
              key={index}
              variant={'outline'}
              className='flex justify-center items-center gap-1.5 rounded-full hover:cursor-pointer'
              asChild
            >
              <a href={props.url} target='_blank'>
                {props.icon && (
                  <Image
                    className='dark:invert'
                    src={props.icon}
                    width={24}
                    height={24}
                    alt={props.alt || 'logo'}
                  />
                )}
                <span className='text-xs'>{props.label}</span>
              </a>
            </Button>
          );
        })}
      </div>
    </section>
  );
}
