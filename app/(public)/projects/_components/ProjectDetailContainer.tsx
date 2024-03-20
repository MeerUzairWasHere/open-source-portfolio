"use client";
import { getSingleProjectAction } from "@/actions/project.actions";
import { Mac } from "@/components/Mac";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/types/project-types";
import { useQuery } from "@tanstack/react-query";
import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";

const ProjectDetailContainer = ({ projectId }: { projectId: string }) => {
  const { data } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => getSingleProjectAction(projectId),
  });

  return (
    <>
      <div className="flex px-4  items-center justify-end w-full">
        <Button className="  mt-6" asChild>
          <Link href=".">
            <>
              <MoveLeft width={10} className="mr-1" /> Back
            </>
          </Link>
        </Button>
      </div>
      <Mac {...(data as Project)} />

      <div className="md:py-10">
        <div className="container px-4 md:px-6">
          <div className="grid max-w-6xl gap-10 mx-auto items-start md:space-y-5 lg:grid-cols-3 lg:gap-16 lg:space-y-0">
            <div className="space-y-4 lg:col-span-2 lg:space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="capitalize p-2">
                  {data?.projectType}
                </Badge>
                <h1 className="text-3xl   font-bold tracking-tighter capitalize sm:text-4xl">
                  {data?.title}
                </h1>
                <p className="text-gray-500 capitalize dark:text-gray-400">
                  ― {data?.oneLiner}
                </p>
              </div>
              <div className="space-y-4 text-gray-500 text-sm text-justify   dark:text-gray-400">
                <p>{data?.description}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="md:flex hidden flex-col gap-2">
                <Button asChild>
                  <Link target="_blank" href={data?.liveURL || ""}>
                    {data?.liveURL.includes("github") ? "Source Code" : "See Live"}{" "}
                    <MoveRight size={10} className="ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-bold">Tech Stack:</h3>
                {data?.techStack?.map((tech: any) => (
                  <Badge key={tech?.id} className="mx-1 capitalize">
                    {tech?.text}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap  items-center gap-2">
                <h3 className="text-lg font-bold">Keywords:</h3>
                {data?.keywords?.map((key: any) => (
                  <Badge key={key?.id} className="mx-1 capitalize">
                    #{key?.text}
                  </Badge>
                ))}
              </div>
              <div className="md:hidden flex flex-col gap-2">
                <Button asChild>
                  <Link target="_blank" href={data?.liveURL || ""}>
                    See Live <MoveRight size={10} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectDetailContainer;
