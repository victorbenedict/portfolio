import { skills } from '@/lib/data';
import { cn, sectionStyle } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function Skills() {
  return (
    <section className={cn(sectionStyle)} id='skills'>
      <h2 className='text-lg font-semibold'>Skills</h2>
      <div className='flex gap-2 flex-wrap py-4'>
        {skills.map((props, index) => {
          return (
            <a key={index} href={props.url} target='_blank'>
              <Button
                variant={'outline'}
                className='flex justify-center items-center gap-1 rounded-full hover:cursor-pointer '
              >
                {props.icon && (
                  <Image
                    className='dark:invert'
                    src={props.icon}
                    width={24}
                    height={24}
                    alt={props.alt || 'logo'}
                  />
                )}
                <span className='text-sm'>{props.label}</span>
              </Button>
            </a>
          );
        })}
      </div>
    </section>
  );
}
