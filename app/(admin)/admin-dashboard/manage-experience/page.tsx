import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { ExperienceTable } from "./_components/experience-table";
import { PageHeader } from "@/components/PageHeader";
import { getAllExperienceAction } from "@/actions/experience.actions";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["experience"],
    queryFn: () => getAllExperienceAction(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageHeader
        title="experience"
        href="/admin-dashboard/manage-experience/add-experience"
      />
      <ExperienceTable />
    </HydrationBoundary>
  );
}
