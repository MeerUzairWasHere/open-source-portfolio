"use client";

import { getAdminDetail } from "@/actions/admin.actions";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const AboutPageContainer = () => {
  const { data, isPending } = useQuery({
    queryKey: ["admin"],
    queryFn: () => getAdminDetail(),
  });

  if (isPending) return <h1>Loading...</h1>;
  if (!data) return <h1 className="text-center">Add admin details first!</h1>;
  return (
    <div className="container max-w-6xl">
      <div className="grid w-full grid-cols-1 md:grid-cols-12">
        {/* left */}
        <div className="col-span-12 flex flex-col gap-12 md:col-span-8 md:pr-12">
          <div className="flex flex-col gap-2">
            <p className="font-semibold uppercase   dark:text-medium-gray">
              Who I am
            </p>
            <p className="text-[18px] leading-[160%]   text-onyx">
              I’m{" "}
              <span className="text-black font-semibold dark:text-white">
                {data?.name || "Your Name"},
              </span>{" "}
              a {data?.position || "Position Name"} based in{" "}
              {data?.location || "Location"}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-semibold uppercase   dark:text-medium-gray">
              WHAT I DO
            </p>
            <p className="text-[18px] leading-[160%]   text-onyx">
              I build innovative web solutions as a{" "}
              {data?.position || "position name"}, turning ideas into reality
              through efficient and creative coding.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-semibold uppercase  dark:text-medium-gray">
              WHAT I DID
            </p>
            <p className="text-[18px] leading-[160%]   text-onyx">
              During my {data?.education || "education"}, I honed skills in{" "}
              {data?.skills.map((skill: any, index: number) => (
                <span
                  className="capitalize text-black font-semibold dark:text-white"
                  key={skill?.id}>
                  {skill?.text}
                  {index !== data.skills.length - 1 ? "," : "."}{" "}
                </span>
              ))}
              These skills have enabled me to create seamless end-to-end and
              interactive user experiences.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[18px] leading-[160%] text-onyx">
              Feel free to reach out via{" "}
              <Link
                className="text-black font-semibold dark:text-white"
                href={`mailto:${data?.email}`}>
                E-mail
              </Link>
              ,{" "}
              {data?.twitter && (
                <>
                  {" "}
                  or follow me on{" "}
                  <Link
                    className="text-black font-semibold dark:text-white"
                    target="_blank"
                    href={data?.twitter}>
                    Twitter
                  </Link>
                  .
                </>
              )}{" "}
              {data?.linkedIn && (
                <>
                  {" "}
                  Want to see where I’ve worked? Check out my{" "}
                  <Link
                    className="text-black font-semibold dark:text-white"
                    target="_blank"
                    href={data?.linkedIn}>
                    LinkedIn
                  </Link>
                  , or connect with me on LinkedIn.
                </>
              )}{" "}
              {data?.github && (
                <>
                  {" "}
                  For my latest projects, visit my{" "}
                  <Link
                    className="text-black font-semibold dark:text-white"
                    target="_blank"
                    href={data?.github}>
                    GitHub
                  </Link>{" "}
                  profile.
                </>
              )}{" "}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold uppercase text-light-gray/50 dark:text-medium-gray"></p>
            <p className="text-[18px] leading-[160%]  text-onyx">
              Let’s build something great together!
            </p>
          </div>
          <Button asChild className="rounded-full">
            <Link
              className=" min-h-[60px] px-8 mx-auto md:hidden  flex gap-4 items-center w-fit"
              href={`mailto:${data?.email}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.934 12 3.09 5.732c-.481-1.635 1.05-3.147 2.665-2.628a53.872 53.872 0 0 1 12.64 5.963C19.525 9.793 21 10.442 21 12c0 1.558-1.474 2.207-2.605 2.933a53.87 53.87 0 0 1-12.64 5.963c-1.614.519-3.146-.993-2.665-2.628L4.934 12Zm0 0h4.9"></path>
              </svg>
              Get in Touch
            </Link>
          </Button>
        </div>
        {/* right */}
        <div className="-order-1 col-span-12 md:order-2 md:col-span-4">
          <div className="group relative mb-20 flex justify-center">
            <picture className="relative z-20 block  w-full overflow-hidden rounded-2xl border-[1px] border-card-border">
              <img
                alt="Portrait of Eihab Khan"
                loading="lazy"
                width="344"
                height="443"
                decoding="async"
                className="w-full"
                data-nimg="1"
                src={data?.imageUrl}
              />
            </picture>
          </div>
          <Button asChild className="rounded-full">
            <Link
              className=" min-h-[60px] px-8 mx-auto hidden md:flex gap-4 items-center w-fit"
              href={`mailto:${data?.email}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.934 12 3.09 5.732c-.481-1.635 1.05-3.147 2.665-2.628a53.872 53.872 0 0 1 12.64 5.963C19.525 9.793 21 10.442 21 12c0 1.558-1.474 2.207-2.605 2.933a53.87 53.87 0 0 1-12.64 5.963c-1.614.519-3.146-.993-2.665-2.628L4.934 12Zm0 0h4.9"></path>
              </svg>
              Get in Touch
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AboutPageContainer;
