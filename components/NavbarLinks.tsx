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
import { SignedIn, useUser } from "@clerk/nextjs";

export const links: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Experience",
    href: "/experience",
  },
  {
    title: "Certification",
    href: "/certification",
  },
  {
    title: "Techstack",
    href: "/techstack",
  },
];

export function NavbarLinks() {
  const { user } = useUser();
  const userEmail = user?.emailAddresses[0]?.emailAddress;

  return (
    <NavigationMenu className="hidden md:block">
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
          {userEmail === "meer.uxair007@gmail.com" && (
            <NavigationMenuItem>
              <Link href="/admin-dashboard" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Admin Dashboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
        </SignedIn>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
