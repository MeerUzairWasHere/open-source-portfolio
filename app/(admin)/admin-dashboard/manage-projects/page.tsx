import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getAllProjectsAction } from "@/actions/project.actions";
import { ProjectsTable } from "./_components/projects-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";



export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["projects"],
    queryFn: () => getAllProjectsAction(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageHeader title="projects" href="manage-projects/add-project" />
      <ProjectsTable />
    </HydrationBoundary>
  );
}
