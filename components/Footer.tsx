"use client";
import { useMyContext } from "@/app/MyContext";
import {
  DiscordLogoIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const data = useMyContext();
  return (
    <footer className="w-full min-h-48 md:min-h-20 border-t shadow-sm py-6">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-4 md:flex-row md:justify-between lg:px-6">
        <div className="order-2 flex items-center gap-2 text-sm md:order-1 md:gap-4 lg:text-base">
          <span className="font-semibold uppercase">
            © {new Date().getFullYear()} {data?.name || "Your Logo"}.
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            All rights reserved.
          </span>
        </div>

        <div className="order-3 flex items-center gap-4 md:order-3 md:gap-6">
          {data?.website && (
            <Link
              className="rounded-full w-6 h-6 overflow-hidden border"
              href="/">
              <Image
                alt="Avatar"
                className="rounded-full border aspect-square object-cover"
                height="32"
                src={data?.imageUrl || ""}
                width="32"
              />
            </Link>
          )}
          {data?.github && (
            <Link
              target="_blank" 
              className="rounded-full w-6 h-6 flex items-center justify-center border border-gray-200 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href={data?.github}>
              <span className="sr-only">GitHub</span>
              <GitHubLogoIcon className="w-4 h-4 fill-current" />
            </Link>
          )}
          {data?.linkedIn && (
            <Link
              className="rounded-full w-6 h-6 flex items-center justify-center border border-gray-200 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href={data?.linkedIn}>
              <span className="sr-only">LinkedIn</span>
              <LinkedinIcon className="w-4 h-4 fill-current" />
            </Link>
          )}
          {data?.twitter && (
            <Link
              className="rounded-full w-6 h-6 flex items-center justify-center border border-gray-200 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href={data?.twitter}>
              <span className="sr-only">Twitter</span>
              <TwitterLogoIcon className="w-4 h-4 fill-current" />
            </Link>
          )}
          {data?.whatsapp && (
            <Link
              className="rounded-full w-6 h-6 flex items-center justify-center border border-gray-200 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href={data?.whatsapp}>
              <span className="sr-only">WhatsApp</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M414.73 97.1A222.14 222.14 0 0 0 256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0 0 29.78 111L32 480l118.25-30.87a223.63 223.63 0 0 0 106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 0 0 414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 0 1-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0 1 71.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 0 1 185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 0 0-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0 0 31.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"></path>
              </svg>
            </Link>
          )}
          {data?.discord && (
            <Link
              className="rounded-full w-6 h-6 flex items-center justify-center border border-gray-200 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href={data?.discord}>
              <span className="sr-only">Discord</span>
              <DiscordLogoIcon />
            </Link>
          )}
          {data?.instagram && (
            <Link
              className="rounded-full w-6 h-6 flex items-center justify-center border border-gray-200 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href={data?.instagram}>
              <span className="sr-only">Instagram</span>
              <InstagramLogoIcon />
            </Link>
          )}
          {data?.facebook && (
            <Link
              className="rounded-full w-6 h-6 flex items-center justify-center border border-gray-200 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href={data?.facebook}>
              <span className="sr-only">facebook</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <g id="Facebook">
                  <path d="M19.02,4.975A9.93,9.93,0,0,0,2.07,12,9.935,9.935,0,0,0,12,21.935a9.98,9.98,0,0,0,3.8-.75,10.189,10.189,0,0,0,3.22-2.16,9.934,9.934,0,0,0,0-14.05Zm-.7,13.34A8.921,8.921,0,0,1,13,20.885v-6.56h1.88a1,1,0,0,0,0-2H13V9.585a1,1,0,0,1,1-1h1.2a1,1,0,0,0,0-2H13.5a2.5,2.5,0,0,0-2.5,2.5v3.24H9.13a1,1,0,1,0,0,2H11v6.56a8.919,8.919,0,1,1,9.26-5.47A9.061,9.061,0,0,1,18.32,18.315Z"></path>
                </g>
              </svg>
            </Link>
          )}
          {data?.email && (
            <Link
              className="rounded-full w-6 h-6 flex items-center justify-center border border-gray-200 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href={`mailto:${data?.email}`}>
              <span className="sr-only">Mail</span>
              <EnvelopeClosedIcon />
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
