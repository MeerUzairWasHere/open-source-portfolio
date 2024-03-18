"use client";
import { getAllProjectsAction } from "@/actions/project.actions";
import Card from "@/components/Card";
import { useQuery } from "@tanstack/react-query";
const ProjectCardsContainer = () => {
  const { data, isPending } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getAllProjectsAction(),
  });
  const projects = data?.projects || [];
  if (isPending) return <h2 className="text-xl">Please wait...</h2>;

  if (projects.length <= 0)
    return <h1 className="text-xl text-center  ">No projects found!</h1>;
  return (
    <div className="max-w-7xl p-4 mx-auto gap-6  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
      {projects.map((project) => (
        <Card
          key={project?.id}
          OneLiner={project?.oneLiner}
          title={project?.title}
          screenshot={project?.screenshot}
          href={`/projects/${project?.id}`}
        />
      ))}
    </div>
  );
};
export default ProjectCardsContainer;
