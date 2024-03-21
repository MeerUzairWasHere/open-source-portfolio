import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getSingleExperienceAction } from "@/actions/experience.actions";
import ExperienceDetailPage from "../_components/ExperienceDetailPage";
 
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Experience Info",
};
const ExperienceDetail = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["experience", params.id],
    queryFn: () => getSingleExperienceAction(params.id),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ExperienceDetailPage experienceId={params?.id} />
    </HydrationBoundary>
  );
};
export default ExperienceDetail;
