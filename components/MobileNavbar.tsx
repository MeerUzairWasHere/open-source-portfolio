"use client";
import Link from "next/link";
import { SignedOut, useAuth, useUser } from "@clerk/nextjs";
import { CheckCircle, Home, Layers, LockKeyhole, Terminal } from "lucide-react";
import { useMyContext } from "@/app/MyContext";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export const links: {
  title: string;
  href: string;
  icon?: any;
  isOpenIcon?: any;
}[] = [
  {
    title: "Techstack",
    href: "/techstack",
    icon: <Layers />,
    isOpenIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-layers">
        <path
          d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
          fill="currentColor"
        />
        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
      </svg>
    ),
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
    isOpenIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        className="text-faint-white dark:text-white">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.682 18.682 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
          clipRule="evenodd"></path>
      </svg>
    ),
  },

  {
    title: "Home",
    href: "/",
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
          d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .62.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
      </svg>
    ),
    isOpenIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        className="text-faint-white dark:text-white">
        <path
          fill="currentColor"
          d="M11.47 3.84a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.06l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 0 0 1.061 1.06l8.69-8.69Z"></path>
        <path
          fill="currentColor"
          d="m12 5.432 8.159 8.16c.03.03.06.057.091.085v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.41 2.41 0 0 0 .091-.086L12 5.431v.001Z"></path>
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
    isOpenIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        className="text-faint-white dark:text-white">
        <path
          fill="currentColor"
          d="M21.731 2.27a2.625 2.625 0 0 0-3.712 0l-1.157 1.156 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.2l-3.712-3.713-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"></path>
      </svg>
    ),
  },
];
const MobileNavbar = () => {
  const { userId } = useAuth();
  const data = useMyContext();
  const pathname = usePathname();
  const isActive = (path: any) => path === pathname;
  //copy
  const [isOpen, setIsOpen] = useState(false);
  //copy
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
                    onClick={() => setIsOpen(false)}
                    className={
                      isActive(link?.href)
                        ? "flex w-full  items-center justify-center py-2 bg-black/30 dark:bg-white/10 rounded-lg "
                        : "flex w-full  items-center justify-center py-2"
                    }
                    href={link.href}>
                    {isActive(link?.href) ? link?.isOpenIcon : link?.icon}
                  </Link>
                </li>
              );
            })}
            <li className="group flex flex-1 items-center justify-center rounded-lg bg-transparent  text-light-gray hover:bg-black/10 dark:hover:bg-white/10">
              <button
                className={"flex w-full  items-center justify-center py-2"}
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
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
                      fill="currentColor"
                      d="M4 12.5h16.5M4 16.25h16.5M4 20h16.5M5.875 5h12.75a1.875 1.875 0 1 1 0 3.75H5.875a1.875 1.875 0 0 1 0-3.75Z"></path>
                  </svg>
                ) : (
                  <>
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
                        d="M4 12.5h16.5M4 16.25h16.5M4 20h16.5M5.875 5h12.75a1.875 1.875 0 1 1 0 3.75H5.875a1.875 1.875 0 0 1 0-3.75Z"></path>
                    </svg>
                  </>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <ul
        className={cn(
          "absolute inset-x-0 bottom-0 z-[-1] flex flex-col gap-4 rounded-t-2xl border-[1px] border-onyx/30 dark:border-card-border/60 bg-onyx/30 dark:bg-[#18181D]/60 p-4 backdrop-blur-md transition min-h-[340px] duration-300 pt-6",
          !isOpen && "translate-y-[500px]"
        )}>
        <li>
          <Link
            onClick={() => setIsOpen(false)}
            className="cursor-pointer rounded-lg justify-center items-center font-medium transition flex w-full gap-2 bg-onyx/30 py-4 text-black dark:text-white hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20"
            href="/certification">
            Certification
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsOpen(false)}
            className="cursor-pointer rounded-lg justify-center items-center font-medium transition flex w-full gap-2 bg-onyx/30 py-4 text-black dark:text-white hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20"
            href="/experience">
            Experience
          </Link>
        </li>
        <SignedOut>
          <li className=" ">
            <Link
              onClick={() => setIsOpen(false)}
              className="cursor-pointer rounded-lg justify-center items-center font-medium transition flex w-full gap-2 bg-onyx/30 py-4 text-black dark:text-white hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20"
              href="/sign-in">
              Admin Login
            </Link>
          </li>
        </SignedOut>
        {data?.adminUserId === userId && (
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              className="cursor-pointer rounded-lg justify-center items-center font-medium transition flex w-full gap-2 bg-onyx/30 py-4 text-black dark:text-white hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20"
              href="/admin-dashboard">
              Admin Dashboard
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};
export default MobileNavbar;
