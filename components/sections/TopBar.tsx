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
    <NavigationMenu className='max-w-screen justify-end lg:justify-center mx-4 lg:mx-8 p-2'>
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
            {navLinks.map((props, index) => {
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
        {navLinks.map((props, index) => {
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
