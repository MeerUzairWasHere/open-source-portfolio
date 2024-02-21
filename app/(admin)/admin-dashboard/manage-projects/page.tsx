import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getAllProjectsAction } from "@/actions/project.actions";
import { ProjectsTable } from "./_components/projects";
export default async function Page() {
  const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: ["projects"],
  //   queryFn: () => getAllProjectsAction(),
  // });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProjectsTable />
    </HydrationBoundary>
  );
}
