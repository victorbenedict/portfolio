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
import { navLinks } from '@/lib/data';

export default function TopBar() {
  return (
    <NavigationMenu className='sticky top-0 z-50 max-w-screen justify-end sm:justify-center mx-4 lg:mx-8 p-2 bg-background border-b'>
      <NavigationMenuList>
        {/* Hamburger Menu */}
        <NavigationMenuItem className='sm:hidden'>
          <NavigationMenuTrigger
            onPointerMove={preventHover}
            onPointerLeave={preventHover}
          >
            <GiHamburgerMenu />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {navLinks.map((props, index) => {
              return (
                <Link key={index} href={props.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'w-full items-start font-medium'
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
        {navLinks.map((props, index) => {
          return (
            <NavigationMenuItem key={index} className='hidden sm:inline-flex'>
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
