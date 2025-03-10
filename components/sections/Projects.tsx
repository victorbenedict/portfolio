'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { projects } from '@/lib/data';
import { cn, sectionStyle } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { Badge } from '../ui/badge';
import { Separator } from '@/components/ui/separator';

export default function Projects() {
  return (
    <section id='projects' className={cn(sectionStyle)}>
      <h2 className='text-lg font-semibold mb-4'>Skills</h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 6000,
            stopOnInteraction: false,
            stopOnFocusIn: false,
            stopOnMouseEnter: false,
          }),
        ]}
        opts={{
          loop: true,
          align: 'center',
        }}
      >
        <CarouselContent>
          {projects.map((props, index) => {
            const { title, url, description, imageSrc, imageAlt, techStack } =
              props;
            return (
              <CarouselItem key={index}>
                <Card key={index} className='h-full justify-start'>
                  <CardHeader>
                    <CardTitle>
                      <span>{title}</span>{' '}
                      <a
                        href={url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-block'
                      >
                        <FaExternalLinkAlt className='text-xs' />
                      </a>
                    </CardTitle>
                    <CardDescription>{description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Zoom>
                      <Image
                        className='rounded-md border object-contain drop-shadow-xl'
                        src={imageSrc}
                        height={0}
                        width={0}
                        alt={imageAlt || 'Project image'}
                      />
                    </Zoom>
                  </CardContent>
                  <CardFooter className='flex-wrap gap-1.5'>
                    {techStack.map((tech, index) => {
                      return (
                        <Badge key={index} variant={'outline'}>
                          {tech}
                        </Badge>
                      );
                    })}
                  </CardFooter>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className='hidden md:flex' />
        <CarouselNext className='hidden md:flex' />
      </Carousel>
    </section>
  );
}
