import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { FormHeader } from "@/components/FormHeader";
import EditExperienceForm from "../../_forms/EditExperienceForm";
import { getSingleExperienceAction } from "@/actions/experience.actions";

const EditExperiencePage = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["experience", params.id],
    queryFn: () => getSingleExperienceAction(params.id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FormHeader title="Edit Experience" href=".." />
      <EditExperienceForm experienceId={params.id} />
    </HydrationBoundary>
  );
};
export default EditExperiencePage;
