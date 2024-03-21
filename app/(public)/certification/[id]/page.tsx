import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { getSingleProjectAction } from "@/actions/project.actions";
import CertificationDetailContainer from "../_components/CertificationDetailContainer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Certification Info",
};
const CertificationDetailPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["certificate", params.id],
    queryFn: () => getSingleProjectAction(params.id),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CertificationDetailContainer certificationId={params.id} />
    </HydrationBoundary>
  );
};
export default CertificationDetailPage;
