'use client';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import { cn, preventHover } from '@/lib/utils';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import ThemeToggle from '../ThemeToggle';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

export default function TopBar() {
  return (
    <NavigationMenu className='max-w-screen justify-end pt-1 lg:justify-center'>
      <NavigationMenuList>
        {/* Hamburger Menu */}
        <NavigationMenuItem className='lg:hidden'>
          <NavigationMenuTrigger
            onPointerMove={preventHover}
            onPointerLeave={preventHover}
          >
            <GiHamburgerMenu />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {links.map((props, index) => {
              return (
                <Link key={index} href={props.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'w-full items-start'
                    )}
                  >
                    {props.label}
                  </NavigationMenuLink>
                </Link>
              );
            })}
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Standard Menu */}
        {links.map((props, index) => {
          return (
            <NavigationMenuItem key={index} className='hidden lg:inline-flex'>
              <Link href={props.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle())}
                >
                  {props.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}

        <NavigationMenuItem>
          <ThemeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenu>
  );
}
