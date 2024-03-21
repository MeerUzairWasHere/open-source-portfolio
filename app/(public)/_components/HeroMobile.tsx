import { Button } from "@/components/ui/button";
import { AdminType } from "@/lib/types/admin-types";
import Link from "next/link";
import { motion } from "framer-motion";
const HeroMobile = ({ name, position, location, email }: AdminType) => {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <div className="container sm:hidden mt-32 max-w-[1024px]">
      <section className=" relative flex items-center justify-end pb-20">
        <motion.div
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}>
          <div className="relative left-0 z-10 flex w-full flex-col gap-6 md:absolute md:w-8/12 md:gap-10">
            <div className="">
              <motion.h1
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="text-center text-[46px] font-extrabold leading-[120%] text-onyx/60 dark:text-dark-gray md:text-left md:text-[80px]">
                I'm{" "}
                <span className="text-onyx dark:text-white">
                  {name || "Your Name"}.
                </span>
              </motion.h1>
              <motion.p
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="text-center text-lg text-onyx/60 dark:text-dark-gray md:text-left md:text-2xl">
                A {position || "Your Position"} based in{" "}
                {location || "Your Location"}, turning ideas into reality
                through efficient and creative coding.
              </motion.p>
            </div>
            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="mt-10 flex w-full flex-col items-center gap-4 md:flex-row">
              <Button
                asChild
                variant={"default"}
                className=" rounded-lg min-h-[60px] px-8 py-4   w-full ">
                <Link className="font-semibold" href={"/projects"}>
                  See my work
                </Link>
              </Button>
            </motion.div>
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
              <Button
                asChild
                variant={"secondary"}
                className="w-full min-h-[60px] px-8 py-4  rounded-lg  ">
                <a className="font-semibold" href={`mailto:${email}`}>
                  Get in touch
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
export default HeroMobile;
