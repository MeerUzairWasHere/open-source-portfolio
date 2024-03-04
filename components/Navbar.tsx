"use client";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { NavbarLinks } from "./NavbarLinks";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { MobileSidebar } from "./MobileSidebar";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggler } from "./ThemeToggler";
import { useMyContext } from "@/app/MyContext";

export const Navbar = () => {
  const data = useMyContext();
  return (
    <header className="fixed z-50 dark:bg-black top-0 flex h-14 w-full items-center border-b bg-white px-4 shadow-sm">
      <div className="mx-auto flex w-full items-center justify-between md:max-w-screen-2xl">
        <Logo name={data?.name || ""} />
        <NavbarLinks />
        <div className="flex items-center justify-between space-x-4 md:block md:w-auto">
          <div className="flex gap-2 items-center">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <ThemeToggler />
            <SignedOut>
              <Button
                className="hidden md:flex"
                size="default"
                variant="default">
                <Link href="/sign-in">Admin Login</Link>
              </Button>
            </SignedOut>
          </div>
          <Sheet>
            <Button
              className="mr-2 block md:hidden"
              asChild
              variant="ghost"
              size="sm">
              <SheetTrigger>
                <Menu className="h-4 w-4" />
              </SheetTrigger>
            </Button>
            <SheetContent>
              <MobileSidebar />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
