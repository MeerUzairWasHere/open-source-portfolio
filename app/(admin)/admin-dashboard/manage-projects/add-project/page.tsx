import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import AddProjectForm from "../_forms/AddProjectForm";
import { FormHeader } from "@/components/FormHeader";

const AddProject = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <FormHeader title="Add Project" href="." />
        <AddProjectForm />
      </HydrationBoundary>
    </>
  );
};
export default AddProject;
