import { cn, sectionStyle, sectionTitleStyle } from '@/lib/utils';
import ButtonLink from '../ButtonLink';
import { experiences } from '@/lib/data';
import React from 'react';

export default function Experience() {
  return (
    <section id='experience' className={cn(sectionStyle)}>
      <h2 className={sectionTitleStyle}>Experience</h2>
      {experiences.map((props, index) => {
        const {
          startDate,
          endDate,
          location,
          company,
          companyUrl,
          position,
          description,
        } = props;
        return (
          <div className='grid grid-cols-1 md:grid-cols-10' key={index}>
            <div className='md:col-start-3 md:col-span-8'>
              <ButtonLink
                variant={'link'}
                className='font-semibold h-fit w-fit p-0 text-base m-0'
                href={companyUrl}
              >
                {company}
              </ButtonLink>
              <div className='italic'>{position}</div>
            </div>
            <div className='md:row-span-2 md:col-span-2 md:col-start-1 md:row-start-1'>
              <div className='text-nowrap'>{`${startDate} - ${endDate}`}</div>
              <div className='italic'>{location}</div>
            </div>
            <div className='md:col-span-8 text-start border-b py-4 mb-4'>
              {description}
            </div>
          </div>
        );
      })}
    </section>
  );
}
