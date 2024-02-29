import Link from "next/link";
import { Button } from "./ui/button";

export function PageHeader({ title, href }: { title: string; href: string }) {
  return (
    <div className="flex justify-between items-center gap-2 mb-5  ">
      <h1 className="font-semibold capitalize text-lg md:text-2xl">
        Manage {title}
      </h1>
      <Button asChild size="default">
        <Link href={href}>Add new {title}</Link>
      </Button>
    </div>
  );
}
