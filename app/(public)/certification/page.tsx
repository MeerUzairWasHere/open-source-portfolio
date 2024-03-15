import Card from "@/components/Card";
import SpotlightHero from "@/components/spot-light";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import CertificationCardContainer from "./_components/CertificationCardContainer";
import { getAllCertificationsAction } from "@/actions/certification.actions";

const CertificationPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["certification"],
    queryFn: () => getAllCertificationsAction(),
  });
  return (
    <>
      <SpotlightHero
        pageName="Certification"
        pageDescription="Elevating skills with certified precision."
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CertificationCardContainer />
      </HydrationBoundary>
    </>
  );
};
export default CertificationPage;
