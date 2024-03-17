import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getSingleExperienceAction } from "@/actions/experience.actions";
import ExperienceDetailPage from "../_components/ExperienceDetailPage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

const ExperienceDetail = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["experience", params.id],
    queryFn: () => getSingleExperienceAction(params.id),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex mt-10 pr-5 justify-end w-full">
        <Button asChild>
          <Link href=".">
            <>
              <MoveLeft width={10} className="mr-1" /> Back
            </>
          </Link>
        </Button>
      </div>
      <ExperienceDetailPage experienceId={params?.id} />
    </HydrationBoundary>
  );
};
export default ExperienceDetail;
