import { Separator } from '@/components/ui/separator';
import { admin, socialLinks } from '@/lib/data';
import { cn, sectionStyle } from '@/lib/utils';
import Image from 'next/image';
import ButtonLink from '../ButtonLink';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function About() {
  return (
    <header
      id='about'
      className={cn(
        sectionStyle,
        'flex flex-col gap-8 justify-start items-center'
      )}
    >
      <Image
        src={admin.photoUrl}
        alt={`Photo of ${admin.name}`}
        width={150}
        height={150}
        priority={true}
        className='rounded-full border'
      />
      <div>
        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-6xl'>
          {admin.name}
        </h1>
        <Separator />
        <div>
          <h2 className='text-lg md:text-xl font-bold text-center'>
            {admin.jobTitle}
          </h2>
          <div className='flex flex-col sm:flex-row gap-1 justify-center'>
            {socialLinks.map((props, index: number) => {
              const Icon = props.icon;
              return (
                <Link
                  key={index}
                  className={buttonVariants({ variant: 'link' })}
                  href={props.url}
                >
                  <Icon />
                  {props.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row gap-4'>
        <ButtonLink href={'#contact'} target='_self'>
          Contact Me
        </ButtonLink>
        <ButtonLink href='./Victor Benedict Bulaong Resume.pdf' download>
          Download Resume
        </ButtonLink>
      </div>
    </header>
  );
}
