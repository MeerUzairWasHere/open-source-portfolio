import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { FormHeader } from "@/components/FormHeader";
import { getSingleTechstackAction } from "@/actions/techstack.actions";
import EditTechstackForm from "../../_forms/EditTechstackForm";

const EditProjectPage = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["techstack", params.id],
    queryFn: () => getSingleTechstackAction(params.id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FormHeader title="Edit Techstack" href=".." />
      <EditTechstackForm techstackId={params.id} />
    </HydrationBoundary>
  );
};
export default EditProjectPage;
