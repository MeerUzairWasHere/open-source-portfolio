import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { PageHeader } from "@/components/PageHeader";

import { TechStackTable } from "./_components/techstack-table";
import { getAllTechstacksAction } from "@/actions/techstack.actions";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["techstacks"],
    queryFn: () => getAllTechstacksAction(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageHeader
        title="techstack"
        href="/admin-dashboard/manage-techstack/add-techstack"
      />
      <TechStackTable />
    </HydrationBoundary>
  );
}
