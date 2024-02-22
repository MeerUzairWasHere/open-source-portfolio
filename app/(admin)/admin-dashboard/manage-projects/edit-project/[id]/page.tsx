import { getSingleProjectAction } from "@/actions/project.actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import EditProjectForm from "../../_forms/EditProjectForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FormHeader } from "@/components/FormHeader";

const EditProjectPage = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["project", params.id],
    queryFn: () => getSingleProjectAction(params.id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FormHeader title="Edit Project" href=".." />
      <EditProjectForm projectId={params.id} />
    </HydrationBoundary>
  );
};
export default EditProjectPage;
