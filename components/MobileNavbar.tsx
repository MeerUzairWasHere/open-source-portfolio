"use client";
import Link from "next/link";
import { links } from "./NavbarLinks";
import { SignedOut, useAuth, useUser } from "@clerk/nextjs";
import { LockKeyhole, Terminal } from "lucide-react";
import { useMyContext } from "@/app/MyContext";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const { userId } = useAuth();
  const data = useMyContext();
  const pathname = usePathname();
  const isActive = (path: any) => path === pathname;
  return (
    <div className="fixed inset-x-0 bottom-0 z-[99999] block px-4 pb-6 md:hidden">
      <div className="flex h-16 w-full items-center justify-between rounded-2xl border-[1px] border-onyx/30 bg-onyx/30 px-4 backdrop-blur-md dark:border-card-border/60 dark:bg-[#18181D]/30">
        <nav className="w-full">
          <ul className="flex items-center justify-between gap-4">
            {links.map((link) => {
              return (
                <li
                  className="group flex flex-1 items-center justify-center rounded-lg bg-transparent  text-light-gray hover:bg-black/10 dark:hover:bg-white/10 "
                  key={link.title}>
                  <Link
                    className={
                      isActive(link?.href)
                        ? "flex w-full  items-center justify-center py-2 bg-black/30 dark:bg-white/10 rounded-lg "
                        : "flex w-full  items-center justify-center py-2"
                    }
                    href={link.href}>
                    {link?.icon}
                  </Link>
                </li>
              );
            })}
            {data?.adminUserId === userId && (
              <li>
                <Link href="/admin-dashboard">
                  <Terminal />
                </Link>
              </li>
            )}
            <SignedOut>
              <li className=" ">
                <Link href="/sign-in">
                  <LockKeyhole />
                </Link>
              </li>
            </SignedOut>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default MobileNavbar;
