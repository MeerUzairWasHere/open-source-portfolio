import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ThemeToggler } from "@/components/ThemeToggler";
import AdminMobileNavbar from "@/components/AdminMobileNavbar";
import { LayoutDashboard } from "lucide-react";
import { sidelinks } from "@/lib/sidelinks";

export default function AdminDashboardLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();
  if ((userId as string) !== (process.env.ADMIN_USER_ID as string)) {
    return redirect("/");
  }
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r  lg:block  ">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="/">
              <LayoutDashboard className="h-5 w-5 dark:fill-gray" />
              <span>Admin Dashboard</span>
            </Link>
          </div>
          <nav className="grid items-start px-4 text-sm font-medium">
            {sidelinks.map((link) => (
              <Link
                key={link.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={link.href}>
                {link.icon}
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex flex-col ">
        <header className="flex h-14  p-2 lg:h-[60px] items-center gap-4 border-b ">
          <div className="flex gap-3 w-full justify-between items-center ">
            <div className="md:hidden font-semibold">Admin Dashboard</div>
            <div className="flex items-center md:ml-auto gap-4">
              <ThemeToggler />
              <UserButton />
            </div>
          </div>
        </header>
        <main className="p-4  ">{children}</main>
      </div>
      <AdminMobileNavbar />
    </div>
  );
}
