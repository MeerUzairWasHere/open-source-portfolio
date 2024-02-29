"use client";
import { getAllStats } from "@/actions/stats.action";
import StatsCard from "@/components/StatsCard";
import { useQuery } from "@tanstack/react-query";

const StatsContainer = () => {
  const { data, isPending } = useQuery({
    queryKey: ["stats"],
    queryFn: () => getAllStats(),
  });
  const stats = data?.stats || [];
  if (isPending) return <h2 className="text-xl">Please wait...</h2>;

  return (
    <>
      <div className="flex justify-between items-center gap-2 mb-5  ">
        <h1 className="font-semibold capitalize text-lg md:text-2xl">Stats</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <StatsCard key={stat.title} title={stat.title} count={stat.count} />
        ))}
      </div>
    </>
  );
};
export default StatsContainer;
