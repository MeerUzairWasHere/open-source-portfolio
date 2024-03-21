import { Button } from "@/components/ui/button";
import { AdminType } from "@/lib/types/admin-types";
import Link from "next/link";

const HeroMobile = ({ name, position, location, email }: AdminType) => {
  return (
    <div className="container sm:hidden mt-24 max-w-[1024px]">
      <section className=" relative flex items-center justify-end pb-32">
        <div className="relative left-0 z-10 flex w-full flex-col gap-6 md:absolute md:w-8/12 md:gap-10">
          <div className="">
            <h1 className="text-center text-[46px] font-extrabold leading-[120%] text-onyx/60 dark:text-dark-gray md:text-left md:text-[80px]">
              I'm{" "}
              <span className="text-onyx dark:text-white">
                {name || "Your Name"}.
              </span>
            </h1>
            <p className="text-center text-lg text-onyx/60 dark:text-dark-gray md:text-left md:text-2xl">
              A {position || "Your Position"} based in{" "}
              {location || "Your Location"}, turning ideas into reality through
              efficient and creative coding.
            </p>
          </div>
          <div className="mt-10 flex w-full flex-col items-center gap-4 md:flex-row">
            <Button
              asChild
              variant={"default"}
              className=" rounded-lg min-h-[60px] px-8 py-4   w-full ">
              <Link className="font-semibold" href={"/projects"}>
                See my work
              </Link>
            </Button>

            <Button
              asChild
              variant={"secondary"}
              className="w-full min-h-[60px] px-8 py-4  rounded-lg  ">
              <a className="font-semibold" href={`mailto:${email}`}>
                Get in touch
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HeroMobile;
