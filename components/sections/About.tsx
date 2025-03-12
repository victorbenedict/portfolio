import { Separator } from '@/components/ui/separator';
import { admin, socialLinks } from '@/lib/data';
import { cn, sectionStyle } from '@/lib/utils';
import Image from 'next/image';
import ButtonLink from '../ButtonLink';

export default function About() {
  return (
    <>
      <header
        id='about'
        className={cn(
          sectionStyle,
          'flex flex-col md:flex-row gap-8 justify-start items-center md:items-start'
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
          <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-6xl border-b-1'>
            {admin.name}
          </h1>
          <h2>{admin.jobTitle}</h2>
          <div className='flex h-5 items-center space-x-4 font-semibold'>
            <div>React</div>
            <Separator orientation='vertical' />
            <div>Next.js</div>
          </div>
        </div>
      </header>
      <section
        className={cn(
          sectionStyle,
          'flex justify-center gap-4 items-center md:justify-between border-b'
        )}
      >
        <div className='flex flex-col md:flex-row gap-1'>
          {socialLinks.map((props, index: number) => {
            const Icon = props.icon;
            return (
              <ButtonLink
                key={index}
                variant={'ghost'}
                className='inline-flex underline'
                href={props.url}
              >
                <Icon />
                {props.label}
              </ButtonLink>
            );
          })}
        </div>
        <div className='flex flex-col md:flex-row gap-4'>
          <ButtonLink href={'#contact'} target='_self'>
            Contact Me
          </ButtonLink>
          <ButtonLink href='./Victor Benedict Bulaong Resume.pdf' download>
            Download Resume
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
