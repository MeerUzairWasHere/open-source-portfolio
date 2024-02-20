import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import AddProjectForm from "../_forms/AddProjectForm";

const AddProject = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <h1 className="font-bold mb-5 border-b text-center pb-4 uppercase text-xl ">
        Add new project
      </h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AddProjectForm />
      </HydrationBoundary>
    </>
  );
};
export default AddProject;
