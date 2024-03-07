import SpotlightHero from "@/components/spot-light";
import ProjectCardsContainer from "./_components/ProjectCardsContainer";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getAllProjectsAction } from "@/actions/project.actions";

const ProjectsPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["projects"],
    queryFn: () => getAllProjectsAction(),
  });
  return (
    <>
      <SpotlightHero
        pageName="Projects"
        pageDescription="Projects and ideas I’ve worked on."
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProjectCardsContainer />
      </HydrationBoundary>
    </>
  );
};
export default ProjectsPage;
