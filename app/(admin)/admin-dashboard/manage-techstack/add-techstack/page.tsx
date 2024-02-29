import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { FormHeader } from "@/components/FormHeader";
import AddTechstackForm from "../_forms/AddTechstackForm";

const AddTechstack = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <FormHeader title="Add Techstack" href="." />
        <AddTechstackForm />
      </HydrationBoundary>
    </>
  );
};
export default AddTechstack;
