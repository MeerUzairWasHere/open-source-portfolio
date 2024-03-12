"use client";
import { getSingleProjectAction } from "@/actions/project.actions";
import { Mac } from "@/components/Mac";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/types/project-types";
import { useQuery } from "@tanstack/react-query";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

const ProjectDetailContainer = ({ projectId }: { projectId: string }) => {
  const { data } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => getSingleProjectAction(projectId),
  });

  return (
    <>
      <Mac {...(data as Project)} />
      <div className="mt-10 max-w-7xl mx-auto flex">
        <h1>Description:{data?.description || ""}</h1>{" "}
        <Button asChild>
          <Link href=".">
            <>
              <MoveLeft width={10} className="mr-1" /> Back
            </>
          </Link>
        </Button>
      </div>
      <div className="h-[3000px]"></div>
    </>
  );
};
export default ProjectDetailContainer;
