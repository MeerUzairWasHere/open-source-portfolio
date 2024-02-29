import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { getAllStats } from "@/actions/stats.action";
import StatsContainer from "./_components/StatsContainer";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["stats"],
    queryFn: () => getAllStats(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StatsContainer />
    </HydrationBoundary>
  );
}
