import SpotlightHero from "@/components/spot-light";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import TechStackPageContainer from "./_components/TechStackPageContainer";
import { getAllTechstacksAction } from "@/actions/techstack.actions";

const TechstackPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["techstacks"],
    queryFn: () => getAllTechstacksAction(),
  });
  return (
    <>
      <SpotlightHero
        pageName="Techstack"
        pageDescription="The skills I have, dev tools, apps, and devices I use, and the games I play."
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TechStackPageContainer />
      </HydrationBoundary>
    </>
  );
};
export default TechstackPage;
