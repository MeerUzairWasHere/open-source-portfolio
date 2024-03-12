import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { Mac } from "@/components/Mac";
import ProjectDetailContainer from "../_components/ProjectDetailContainer";
import { getSingleProjectAction } from "@/actions/project.actions";

const ProjectDetails = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["project", params.id],
    queryFn: () => getSingleProjectAction(params.id),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProjectDetailContainer projectId={params?.id} />
    </HydrationBoundary>
  );
};
export default ProjectDetails;
