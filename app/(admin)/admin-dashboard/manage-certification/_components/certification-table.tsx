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
import { getAllCertificationsAction } from "@/actions/certification.actions";
import { DeleteCertificationButton } from "./delete-certification";

export const CertificationsTable = () => {
  const { data, isPending } = useQuery({
    queryKey: ["certification"],
    queryFn: () => getAllCertificationsAction(),
  });
  const certifications = data?.certifications || [];
  if (isPending) return <h2 className="text-xl">Please wait...</h2>;

  return (
    <div className="flex flex-1 flex-col gap-4 ">
      {certifications.length < 1 ? (
        <>
          <h2 className="text-xl">No Certification Found...</h2>
        </>
      ) : (
        <>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Certificate Name</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {certifications.map(({ id, title }) => (
                  <TableRow key={id}>
                    <TableCell>{title}</TableCell>
                    <TableCell className="flex justify-center gap-2 md:gap-20">
                      <Button
                        className="flex items-center text-xsm gap-2 "
                        size="sm"
                        asChild
                        variant="outline">
                        <Link
                          href={`manage-certification/edit-certification/${id}`}>
                          <Pencil className="w-3 h-3 " />
                          Edit
                        </Link>
                      </Button>
                      <DeleteCertificationButton id={id} />
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
