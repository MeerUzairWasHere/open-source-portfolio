import { useMyContext } from "@/app/MyContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactMe = () => {
  const data = useMyContext();
  return (
    <div className="max-w-8xl mx-auto px-8 relative   my-10 flex flex-col items-center justify-between gap-10 lg:flex-row">
      <div className="">
        <h2 className="text-center text-3xl font-bold text-onyx dark:text-white lg:text-left lg:text-5xl">
          Let’s work together
        </h2>
        <p className="mt-4 text-center text-xl text-medium-gray lg:text-left">
          Want to discuss an opportunity to create something great?{" "}
          <br className="hidden lg:inline-block" /> I’m ready when you are.
        </p>
      </div>
      <Button  asChild variant="default" size="xl">
        <Link href={`mailto:${data?.email}`}>
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
  );
};
export default ContactMe;
