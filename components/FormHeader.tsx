import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
type Prop = {
  title: string;
  href: string;
};
export const FormHeader = ({ title, href }: Prop) => {
  return (
    <h1 className="font-bold mb-5 border-b flex text-center pb-4 uppercase text-xl justify-between w-full ">
      {title}
      <Button size="sm" asChild className="flex items-center gap-1">
        <Link href={href}>
          <ArrowLeft className="size-4" />
          back
        </Link>
      </Button>
    </h1>
  );
};
