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
