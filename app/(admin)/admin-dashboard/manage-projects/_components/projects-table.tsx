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
import { Pencil, Trash } from "lucide-react";
import Link from "next/link";
import { getAllProjectsAction } from "@/actions/project.actions";
import { DeleteProjectButton } from "./delete-project";

export const ProjectsTable = () => {
  const { data, isPending } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getAllProjectsAction(),
  });
  const projects = data?.projects || [];
  if (isPending) return <h2 className="text-xl">Please wait...</h2>;

  return (
    <div className="flex flex-1 flex-col gap-4 ">
     

      {projects.length < 1 ? (
        <>
          <h2 className="text-xl">No Projects Found...</h2>
        </>
      ) : (
        <>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project Name</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map(({ id, title }) => (
                  <TableRow key={id}>
                    <TableCell>{title}</TableCell>
                    <TableCell className="flex justify-center gap-2 md:gap-20">
                      <Button
                        className="flex items-center text-xsm gap-2 "
                        size="sm"
                        asChild
                        variant="outline">
                        <Link href={`manage-projects/edit-project/${id}`}>
                          <Pencil className="w-3 h-3 " />
                          Edit
                        </Link>
                      </Button>
                      <DeleteProjectButton id={id} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </>
      )}
    </div>
  );
};
