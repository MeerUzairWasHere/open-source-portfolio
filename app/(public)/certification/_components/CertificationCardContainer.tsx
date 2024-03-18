"use client";

import { getAllCertificationsAction } from "@/actions/certification.actions";
import Card from "@/components/Card";
import { useQuery } from "@tanstack/react-query";

const CertificationCardContainer = () => {
  const { data, isPending } = useQuery({
    queryKey: ["certification"],
    queryFn: () => getAllCertificationsAction(),
  });

  const certifications = data?.certifications || [];
  if (isPending) return <h2 className="text-xl">Please wait...</h2>;

  if (certifications.length <= 0)
    return <h1 className="text-xl text-center  ">No certification found!</h1>;
  return (
    <div className="max-w-7xl p-4 mx-auto gap-6    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
      {certifications.map((cert) => (
        <Card
          key={cert?.id}
          title={cert?.title}
          OneLiner={cert?.organizationName}
          screenshot={cert?.screenshot}
          href={`/certification/${cert?.id}`}
        />
      ))}
    </div>
  );
};
export default CertificationCardContainer;
