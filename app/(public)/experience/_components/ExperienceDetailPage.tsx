"use client";
import { getSingleExperienceAction } from "@/actions/experience.actions";
import { Label } from "@/components/ui/label";
import { useQuery } from "@tanstack/react-query";
import { Calendar, MapPin } from "lucide-react";

export default function ExperienceDetailPage({
  experienceId,
}: {
  experienceId: string;
}) {
  const { data } = useQuery({
    queryKey: ["experience", experienceId],
    queryFn: () => getSingleExperienceAction(experienceId),
  });

  return (
    <div className="px-4 py-8 md:px-10 md:py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="text-3xl">{data?.positionName}</div>
          <div className="text-gray-500">{data?.companyName}</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Calendar size={20} /> Start Date
            </Label>
            <div>{data?.startDate.toDateString()}</div>
          </div>
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Calendar size={20} /> End Date
            </Label>
            <div>{data?.endDate.toDateString()}</div>
          </div>
        </div>
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <MapPin /> Company Location
          </Label>
          <div>{data?.companyLocation}</div>
        </div>
        <div className="space-y-2">
          <Label>Things I Did</Label>
          <div>
            {data?.learned.map((learn: any) => (
              <li key={learn?.id}>{learn?.text}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
