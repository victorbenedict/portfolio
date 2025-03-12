import { cn } from '@/lib/utils';
import { VariantProps } from 'class-variance-authority';
import React, { HTMLAttributeAnchorTarget } from 'react';
import { Button, buttonVariants } from './ui/button';

interface ButtonLinkProps extends VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  className?: string;
  href: string;
  download?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

export default function ButtonLink({
  children,
  className,
  href,
  download = false,
  target = '_blank',
  ...props
}: ButtonLinkProps) {
  return (
    <Button
      className={cn(
        'flex justify-center items-center gap-1 hover:cursor-pointer',
        className
      )}
      asChild
      {...props}
    >
      <a
        href={href}
        target={target}
        rel='noopener noreferrer'
        download={download}
      >
        {children}
      </a>
    </Button>
  );
}
