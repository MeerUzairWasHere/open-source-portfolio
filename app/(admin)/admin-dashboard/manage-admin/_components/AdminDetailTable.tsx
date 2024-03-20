"use client";

import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Pencil } from "lucide-react";
import Link from "next/link";
import { getAdminDetail } from "@/actions/admin.actions";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import avatar from "@/public/placeholder-user.jpg";
import Image from "next/image";
import { DeleteAdminButton } from "./DeleteUserButton";
import { PageHeader } from "@/components/PageHeader";

export const AdminDetailTable = () => {
  const { data, isPending } = useQuery({
    queryKey: ["admin"],
    queryFn: () => getAdminDetail(),
  });
  if (isPending) return <h2 className="text-xl">Please wait...</h2>;
  const id = data?.id || "";
  return (
    <>
      {data ? null : (
        <>
          <PageHeader
            title="admin"
            href="/admin-dashboard/manage-admin/add-admin"
          />
        </>
      )}
      {data && (
        <>
          <Card className="w-full px-2 md:px-16">
            <div className="flex justify-between  px-2 py-6">
              <Avatar className="w-16 h-16 md:w-32 md:h-32 p-1 border-2 border-white rounded-full">
                <AvatarImage
                  className="rounded-full object-cover  w-full h-full"
                  src={data?.imageUrl}
                />
                <AvatarFallback>
                  <Image
                    src={avatar}
                    className="w-full h-full object-cover rounded-full"
                    alt="Avatar"
                  />
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-end gap-4">
                <Button asChild>
                  <Link href={`manage-admin/edit-admin/${id}`}>
                    <Pencil className="w-3 h-3 mr-3" />
                    Edit
                  </Link>
                </Button>
                <DeleteAdminButton id={id} />
              </div>
            </div>
            <CardContent className="p-6">
              <div className="">
                <h3 className="text-lg font-bold">{data?.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {data?.position}
                </p>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm/relaxed">{data?.introduction}</p>
                <div className="mt-6 space-y-2">
                  <div>
                    <h4 className="text-sm font-semibold">Skills</h4>
                    <ul className="text-sm text-gray-500 dark:text-gray-400">
                      {data?.skills?.map((skill: any) => (
                        <li key={skill?.id}>{skill?.text}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Socials</h4>
                    <ul className="text-sm text-gray-500  dark:text-gray-400">
                      {data?.website && (
                        <li className="capitalize font-bold">
                          portfolio:{" "}
                          <a
                            target="_blank"
                            className="text-black dark:text-white lowercase hover:underline"
                            href={data?.website}>
                            {data?.website}
                          </a>
                        </li>
                      )}
                      {data?.email && (
                        <li className="capitalize font-bold">
                          email:{" "}
                          <a
                            target="_blank"
                            className="text-black dark:text-white lowercase hover:underline"
                            href={`mailto:${data?.email}`}>
                            {data?.email}
                          </a>
                        </li>
                      )}
                      {data?.twitter && (
                        <li className="capitalize font-bold">
                          twitter:{" "}
                          <a
                            target="_blank"
                            className="text-black dark:text-white lowercase hover:underline"
                            href={data?.twitter}>
                            {data?.twitter}
                          </a>
                        </li>
                      )}
                      {data?.github && (
                        <li className="capitalize font-bold">
                          github:{" "}
                          <a
                            target="_blank"
                            className="text-black dark:text-white lowercase hover:underline"
                            href={data?.github}>
                            {data?.github}
                          </a>
                        </li>
                      )}
                      {data?.linkedIn && (
                        <li className="capitalize font-bold">
                          linkedIn:{" "}
                          <a
                            target="_blank"
                            className="text-black dark:text-white lowercase hover:underline"
                            href={data?.linkedIn}>
                            {data?.linkedIn}
                          </a>
                        </li>
                      )}
                      {data?.whatsapp && (
                        <li className="capitalize font-bold">
                          whatsapp:{" "}
                          <a
                            target="_blank"
                            className="text-black dark:text-white lowercase hover:underline"
                            href={data?.whatsapp}>
                            {data?.whatsapp}
                          </a>
                        </li>
                      )}
                      {data?.facebook && (
                        <li className="capitalize font-bold">
                          facebook:{" "}
                          <a
                            target="_blank"
                            className="text-black dark:text-white lowercase hover:underline"
                            href={data?.facebook}>
                            {data?.facebook}
                          </a>
                        </li>
                      )}
                      {data?.instagram && (
                        <li className="capitalize font-bold">
                          instagram:{" "}
                          <a
                            target="_blank"
                            className="text-black dark:text-white lowercase hover:underline"
                            href={data?.instagram}>
                            {data?.instagram}
                          </a>
                        </li>
                      )}
                      {data?.discord && (
                        <li className="capitalize font-bold">
                          discord:{" "}
                          <a
                            target="_blank"
                            className="text-black dark:text-white lowercase hover:underline"
                            href={data?.discord}>
                            {data?.discord}
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Address</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {data?.location}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Education</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {data?.education}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </>
  );
};
