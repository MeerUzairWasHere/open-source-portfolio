import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import AddExperienceForm from "../_forms/AddExperienceForm";
import { FormHeader } from "@/components/FormHeader";

const AddExperience = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <FormHeader title="Add Experience" href="." />
        <AddExperienceForm />
      </HydrationBoundary>
    </>
  );
};
export default AddExperience;
