import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
type Prop = {
  title: string;
  OneLiner: string;
  screenshot: string;
  href: string;
};
const Card = ({ OneLiner, screenshot, title, href }: Prop) => {
  return (
    <div className="row-span-1  rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white  border justify-between flex flex-col  ">
      <Link href={href}>
        <>
          <div className="rounded-xl border">
            <Image
              className="rounded-xl"
              src={screenshot}
              alt={title}
              width={400}
              height={300}
            />
          </div>
          <div className="group-hover/bento:translate-x-2 transition duration-200">
            <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
              {title}
            </div>
            <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
              {OneLiner}
            </div>
          </div>
        </>
      </Link>
    </div>
  );
};
export default Card;
