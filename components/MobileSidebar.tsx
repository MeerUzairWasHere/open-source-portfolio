"use client";
import Link from "next/link";
import { links } from "./NavbarLinks";
import { SignedOut } from "@clerk/nextjs";

export const MobileSidebar = () => {
  return (
    <ul>
      {links.map((link) => {
        return (
          <li className="" key={link.title}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        );
      })}
      <li>
        <Link href="/admin-dashboard">Admin Dashboard</Link>
      </li>
      <SignedOut>
        <li className="text-gray-700 hover:text-indigo-600">
          <Link href="/sign-in">Admin Login</Link>
        </li>
      </SignedOut>
    </ul>
  );
};
