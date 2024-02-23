import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { FormHeader } from "@/components/FormHeader";
import EditCertificationForm from "../../_forms/EditCertificationForm";
import { getSingleCertificationAction } from "@/actions/certification.actions";

const EditProjectPage = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["certificate", params.id],
    queryFn: () => getSingleCertificationAction(params.id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FormHeader title="Edit Certificate" href=".." />
      <EditCertificationForm certificateId={params.id} />
    </HydrationBoundary>
  );
};
export default EditProjectPage;
