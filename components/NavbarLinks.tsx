"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SignedIn, useAuth } from "@clerk/nextjs";
import { useMyContext } from "@/app/MyContext";
import { Cpu, Home, CheckCircle, Layers } from "lucide-react";

export const links: { title: string; href: string; icon?: any }[] = [
  {
    title: "Home",
    href: "/",
    icon: <Home />,
  },
  {
    title: "About",
    href: "/about",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        className="text-faint-white dark:text-white">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
      </svg>
    ),
  },

  {
    title: "Experience",
    href: "/experience",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        className="text-faint-white dark:text-white">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.29-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.182 2.182 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.117 48.117 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.98 23.98 0 0 1 12 15.75a24 24 0 0 1-7.577-1.22 2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.11 48.11 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.668 48.668 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"></path>
      </svg>
    ),
  },
  {
    title: "Projects",
    href: "/projects",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        className="text-faint-white dark:text-white">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 0 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487h-.001Zm0 0L19.5 7.125"></path>
      </svg>
    ),
  },
  {
    title: "Certification",
    href: "/certification",
    icon: <CheckCircle />,
  },
  {
    title: "Techstack",
    href: "/techstack",
    icon: <Layers />,
  },
];

export function NavbarLinks() {
  const data = useMyContext();
  const { userId } = useAuth();
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        {links.map((link) => (
          <NavigationMenuItem key={link.title}>
            <Link href={link.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {link.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        <SignedIn>
          {data?.adminUserId === userId && (
            <NavigationMenuItem>
              <Link href="/admin-dashboard" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Admin Dashbord
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
        </SignedIn>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
