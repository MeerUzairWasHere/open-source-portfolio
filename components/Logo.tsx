import Link from "next/link";

export const Logo = ({ name }: { name: string }) => {
  return (
    <Link href="/" className="text-black dark:text-white font-bold text-xl">
      {name}.
    </Link>
  );
};
