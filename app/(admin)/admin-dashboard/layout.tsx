import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import {
  BarChart,
  Briefcase,
  CheckCircle,
  GanttChartSquare,
  Layers,
  LayoutDashboard,
  User,
} from "lucide-react";
import { ThemeToggler } from "@/components/ThemeToggler";
type sideLink = { text: string; href: string; icon: React.ReactNode };

const sidelinks: sideLink[] = [
  {
    text: "Stats",
    href: "/admin-dashboard",
    icon: <BarChart className="h-4 w-4" />,
  },
  {
    text: "About me",
    href: "/admin-dashboard/manage-about-me",
    icon: <User className="h-4 w-4" />,
  },
  {
    text: "Projects",
    href: "/admin-dashboard/manage-projects",
    icon: <GanttChartSquare className="h-4 w-4" />,
  },
  {
    text: "Certification",
    href: "/admin-dashboard/manage-certification",
    icon: <CheckCircle className="h-4 w-4" />,
  },
  {
    text: "Experience",
    href: "/admin-dashboard/manage-experience",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    text: "Techstack",
    href: "/admin-dashboard/manage-techstack",
    icon: <Layers className="h-4 w-4" />,
  },
];

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
            <Link
              className="flex items-center gap-2 font-semibold"
              href="/admin-dashboard">
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
          {sidelinks.map((link) => (
            <Link key={link.href} className="lg:hidden" href={link.href}>
              {link.icon}
              <span className="sr-only">{link.text}</span>
            </Link>
          ))}
          <div className="flex gap-3 items-center ml-auto">
            <ThemeToggler />
            <UserButton />
          </div>
        </header>
        <main className="p-4  ">{children}</main>
      </div>
    </div>
  );
}
