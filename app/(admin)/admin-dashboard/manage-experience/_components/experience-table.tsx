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
import { Pencil } from "lucide-react";
import Link from "next/link";
import { getAllExperienceAction } from "@/actions/experience.actions";
import { DeleteExperienceButton } from "./delete-experience";

export const ExperienceTable = () => {
  const { data, isPending } = useQuery({
    queryKey: ["experience"],
    queryFn: () => getAllExperienceAction(),
  });
  const experience = data?.experience || [];
  if (isPending) return <h2 className="text-xl">Please wait...</h2>;

  return (
    <div className="flex flex-1 flex-col gap-4 ">
      {experience.length < 1 ? (
        <>
          <h2 className="text-xl">No Experience Found...</h2>
        </>
      ) : (
        <>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Experience Name</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {experience.map(({ id, positionName }) => (
                  <TableRow key={id}>
                    <TableCell>{positionName}</TableCell>
                    <TableCell className="flex justify-center gap-2 md:gap-20">
                      <Button
                        className="flex items-center text-xsm gap-2 "
                        size="sm"
                        asChild
                        variant="outline">
                        <Link href={`manage-experience/edit-experience/${id}`}>
                          <Pencil className="w-3 h-3 " />
                          Edit
                        </Link>
                      </Button>
                      <DeleteExperienceButton id={id || ""} />
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
