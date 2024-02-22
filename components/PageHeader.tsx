import Link from "next/link";
import { Button } from "./ui/button";

export function PageHeader({ title, href }: { title: string; href: string }) {
  return (
    <div className="grid items-center gap-2 md:grid-cols-[200px_1fr] mb-4">
      <h1 className="font-semibold capitalize text-lg md:text-2xl">{title}</h1>
      <Button className="ml-auto w-[100px] md:w-[150px]" size="sm">
        <Link href={href}>Add new {title}</Link>
      </Button>
    </div>
  );
}
