import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { PageHeader } from "@/components/PageHeader";
import { getAdminDetail } from "@/actions/admin.actions";
import { AdminDetailTable } from "./_components/AdminDetailTable";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["admin"],
    queryFn: () => getAdminDetail(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
       <AdminDetailTable />
    </HydrationBoundary>
  );
}
