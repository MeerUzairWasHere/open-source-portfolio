"use client";
import Link from "next/link";
import { SignedOut, useAuth } from "@clerk/nextjs";
import { LockKeyhole, Terminal } from "lucide-react";
import { useMyContext } from "@/app/MyContext";
import { sidelinks } from "@/lib/sidelinks";

const AdminMobileNavbar = () => {
  const { userId } = useAuth();
  const data = useMyContext();
  return (
    <div className="fixed inset-x-0 bottom-0 z-[99999] block px-4 pb-6 md:hidden">
      <div className="flex h-16 w-full items-center justify-between rounded-2xl border-[1px] border-onyx/30 bg-onyx/30 px-4 backdrop-blur-md dark:border-card-border/60 dark:bg-[#18181D]/30">
        <nav className="w-full">
          <ul className="flex items-center justify-between gap-4">
            {sidelinks.map((link) => {
              return (
                <li className=" " key={link.href}>
                  <Link
                    className="flex w-full items-center justify-center py-2"
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
export default AdminMobileNavbar;
