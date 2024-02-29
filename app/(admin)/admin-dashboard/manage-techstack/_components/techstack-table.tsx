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
import { getAllTechstacksAction } from "@/actions/techstack.actions";
import { DeleteTechstackButton } from "./delete-techstack";

export const TechStackTable = () => {
  const { data, isPending } = useQuery({
    queryKey: ["techstacks"],
    queryFn: () => getAllTechstacksAction(),
  });
  const techstacks = data?.techstacks || [];
  if (isPending) return <h2 className="text-xl">Please wait...</h2>;

  return (
    <div className="flex flex-1 flex-col gap-4 ">
      {techstacks.length < 1 ? (
        <>
          <h2 className="text-xl">No Techstack Found...</h2>
        </>
      ) : (
        <>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Techstack Name</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {techstacks.map(({ id, title }) => (
                  <TableRow key={id}>
                    <TableCell>{title}</TableCell>
                    <TableCell className="flex justify-center gap-2 md:gap-20">
                      <Button
                        className="flex items-center text-xsm gap-2 "
                        size="sm"
                        asChild
                        variant="outline">
                        <Link href={`manage-techstack/edit-techstack/${id}`}>
                          <Pencil className="w-3 h-3 " />
                          Edit
                        </Link>
                      </Button>
                      <DeleteTechstackButton id={id} />
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
