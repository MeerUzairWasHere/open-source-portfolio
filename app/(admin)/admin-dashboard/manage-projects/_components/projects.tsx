"use client";

import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import {  Pencil, Trash } from "lucide-react";
import Link from "next/link";
import { getAllProjectsAction } from "@/actions/project.actions";

export const ProjectsTable = () => {
  const { data, isPending } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getAllProjectsAction(),
  });

  const projects = data?.AllProjects || [];

  console.log(projects);

  if (isPending) return <h2 className="text-xl">Please wait...</h2>;
  // if (projects.length < 1)
  //   return <h2 className="text-xl">No Projects Found...</h2>;
  return (
    <div className="flex flex-1 flex-col gap-4 ">
      <div className="grid items-center gap-2 md:grid-cols-[200px_1fr]">
        <h1 className="font-semibold text-lg md:text-2xl">Projects</h1>
        <Button className="ml-auto w-[100px] md:w-[150px]" size="sm">
          <Link href="manage-projects/add-project">Add new project</Link>
        </Button>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>TrekNest - Tour & Travel CMS</TableCell>

              <TableCell className="flex justify-center gap-2 md:gap-20">
                <Button
                  className="flex items-center text-xsm gap-2"
                  size="sm"
                  asChild
                  variant="secondary">
                  <Link href="manage-projects/edit-project/asdasd">
                    <Pencil className="w-3 h-3" />
                    Edit
                  </Link>
                </Button>
                <Button
                  className="flex items-center text-xsm gap-2"
                  size="sm"
                  variant="destructive">
                  <Trash className="w-3 h-3" />
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};
