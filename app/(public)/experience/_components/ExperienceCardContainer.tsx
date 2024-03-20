"use client";

import { getAllExperienceAction } from "@/actions/experience.actions";
import ExperienceCard from "@/components/ExperienceCard";
import { ExperienceType } from "@/lib/types/experience-types";
import { useQuery } from "@tanstack/react-query";

const ExperienceCardContainer = () => {
  const { data, isPending } = useQuery({
    queryKey: ["experiences"],
    queryFn: () => getAllExperienceAction(),
  });

  const experiences = data?.experience || [];
  if (isPending) return <h2 className="text-xl">Please wait...</h2>;

  if (experiences.length <= 0)
    return <h1 className="text-xl text-center  ">No experiences found!</h1>;
  return (
    <div className="max-w-7xl p-4 mx-auto gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
      {experiences.map((cert) => (
        <ExperienceCard key={cert.id} {...(cert as ExperienceType)} />
      ))}
    </div>
  );
};
export default ExperienceCardContainer;
