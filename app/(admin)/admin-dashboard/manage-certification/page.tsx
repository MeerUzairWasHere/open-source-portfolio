import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { CertificationsTable } from "./_components/certification-table";
import { PageHeader } from "@/components/PageHeader";
import { getAllCertificationsAction } from "@/actions/certification.actions";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["certification"],
    queryFn: () => getAllCertificationsAction(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageHeader
        title="certification"
        href="/admin-dashboard/manage-certification/add-certification"
      />
      <CertificationsTable />
    </HydrationBoundary>
  );
}
