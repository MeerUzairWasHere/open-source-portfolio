import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import AddCertificationForm from "../_forms/AddCertificationForm";
import { FormHeader } from "@/components/FormHeader";

const AddCertification = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <FormHeader title="Add Certification" href="." />
        <AddCertificationForm />
      </HydrationBoundary>
    </>
  );
};
export default AddCertification;
