import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { FormHeader } from "@/components/FormHeader";
import AddAdminForm from "../_forms/AddAdminForm";

const AddAdmin = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <FormHeader title="Add Addmin" href="." />
        <AddAdminForm />
      </HydrationBoundary>
    </>
  );
};
export default AddAdmin;
