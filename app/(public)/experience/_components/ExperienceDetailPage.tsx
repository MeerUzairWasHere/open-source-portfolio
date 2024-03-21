"use client";
import { getSingleExperienceAction } from "@/actions/experience.actions";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useQuery } from "@tanstack/react-query";
import { Calendar, MapPin, MoveLeft } from "lucide-react";
import Link from "next/link";

export default function ExperienceDetailPage({
  experienceId,
}: {
  experienceId: string;
}) {
  const { data } = useQuery({
    queryKey: ["experience", experienceId],
    queryFn: () => getSingleExperienceAction(experienceId),
  });
  const sD = data?.startDate.toDateString();
  const eD = data?.endDate.toDateString();
  return (
    <div className="px-4 pt-10  md:px-10  ">
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="text-3xl flex items-center justify-between">
            {data?.positionName}{" "}
            <Button asChild className="w-full md:w-fit hidden md:flex">
              <Link href=".">
                <>
                  <MoveLeft width={10} className="mr-1" /> Back
                </>
              </Link>
            </Button>
          </div>
          <div className="text-gray-500">{data?.companyName}</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Calendar size={20} /> Start Date
            </Label>
            <div>{sD}</div>
          </div>
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Calendar size={20} /> End Date
            </Label>
            <div>{eD}</div>
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
          <div className="space-y-2">
            {data?.learned.map((learn: any) => (
              <li className="text-sm md:text-base" key={learn?.id}>
                {learn?.text}
              </li>
            ))}
          </div>
        </div>
        <Button asChild className="w-full md:hidden">
          <Link href=".">
            <>
              <MoveLeft width={10} className="mr-1" /> Back
            </>
          </Link>
        </Button>
      </div>
    </div>
  );
}
