"use client";

import { getAllTechstacksAction } from "@/actions/techstack.actions";
import TechstackCard from "@/components/TechstackCard";
import { TechType } from "@/lib/types/techstack-types";
import { useQuery } from "@tanstack/react-query";

const TechStackPageContainer = () => {
  const { data, isPending } = useQuery({
    queryKey: ["techstacks"],
    queryFn: () => getAllTechstacksAction(),
  });
  const techstacks = data?.techstacks || [];

  const skills =
    data?.techstacks.filter(
      (item) => item?.techstackType === TechType.Skills
    ) || [];
  const devTools =
    data?.techstacks.filter(
      (item) => item?.techstackType === TechType.DevTools
    ) || [];

  const apps =
    data?.techstacks.filter((item) => item?.techstackType === TechType.Apps) ||
    [];
  const games =
    data?.techstacks.filter((item) => item?.techstackType === TechType.Games) ||
    [];
  const hardware =
    data?.techstacks.filter(
      (item) => item?.techstackType === TechType.Harware
    ) || [];

  if (isPending) return <h2 className="text-xl">Please wait...</h2>;

  if (techstacks.length < 0)
    return <h1 className="text-xl text-center  ">No techstack found!</h1>;

  return (
    <div className="max-w-7xl mx-auto">
      {skills?.length > 0 && (
        <>
          <h1 className="text-3xl md:text-5xl mb-4 pl-4 font-extrabold">
            Skills
          </h1>
          <div className=" p-4  gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {skills?.map((techstack) => (
              <TechstackCard key={techstack?.id} {...techstack} />
            ))}
          </div>
        </>
      )}
      {devTools?.length > 0 && (
        <>
          <h1 className="text-3xl md:text-5xl my-4 pl-4 font-extrabold">
            Dev Tools
          </h1>
          <div className=" p-4  gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {devTools?.map((techstack) => (
              <TechstackCard key={techstack?.id} {...techstack} />
            ))}
          </div>
        </>
      )}
      {apps?.length > 0 && (
        <>
          <h1 className="text-3xl md:text-5xl my-4 pl-4 font-extrabold">
            Apps
          </h1>
          <div className=" p-4  gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {apps?.map((techstack) => (
              <TechstackCard key={techstack?.id} {...techstack} />
            ))}
          </div>
        </>
      )}
      {games?.length > 0 && (
        <>
          <h1 className="text-3xl md:text-5xl my-4 pl-4 font-extrabold">
            Games
          </h1>
          <div className=" p-4  gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {games?.map((techstack) => (
              <TechstackCard key={techstack?.id} {...techstack} />
            ))}
          </div>
        </>
      )}
      {hardware?.length > 0 && (
        <>
          <h1 className="text-3xl md:text-5xl my-4 pl-4 font-extrabold">
            Hardware
          </h1>
          <div className=" p-4  gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {hardware?.map((techstack) => (
              <TechstackCard key={techstack?.id} {...techstack} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default TechStackPageContainer;
