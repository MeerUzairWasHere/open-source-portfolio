import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { FormHeader } from "@/components/FormHeader";
import { getAdminDetail } from "@/actions/admin.actions";
import EditAdminForm from "../../_forms/EditAdminForm";

const EditProjectPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["admin"],
    queryFn: () => getAdminDetail(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FormHeader title="Edit Admin Detail" href=".." />
      <EditAdminForm    />
    </HydrationBoundary>
  );
};
export default EditProjectPage;
