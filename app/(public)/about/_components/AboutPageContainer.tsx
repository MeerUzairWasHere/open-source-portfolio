"use client";

import { getAdminDetail } from "@/actions/admin.actions";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const AboutPageContainer = () => {
  const { data, isPending } = useQuery({
    queryKey: ["admin"],
    queryFn: () => getAdminDetail(),
  });
  if (isPending) return <h1>Loading...</h1>;
  return (
    <>
      {data && (
        <div className="max-w-4xl mx-auto  shadow-lg rounded-lg">
          <div className="flex flex-col items-center text-center">
            <Avatar>
              <AvatarImage
                alt={`Profile picture of ${data?.name}`}
                src={data?.imageUrl}
              />
            </Avatar>
            <h1 className="mt-4 text-2xl font-semibold">{data?.name}</h1>
            <p className="text-sm text-gray-600">{data?.position}</p>
            <p className="text-sm text-gray-600">{data?.location}</p>
            <p className="mt-4">{data?.introduction}</p>
            <p className="mt-4 font-medium">{data?.education}</p>
            <div className="mt-4">
              <h2 className="text-lg font-semibold">Skills</h2>
              <div className="flex justify-center mt-2">
                {data?.skills.map((skill: any) => (
                  <Badge className="mx-1" key={skill?.id} variant="secondary">
                    {skill?.text}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {data?.github && (
                <Button asChild variant="link">
                  <Link target="_blank" href={data.github}>
                    GitHub
                  </Link>
                </Button>
              )}

              {data?.linkedIn && (
                <Button asChild variant="link">
                  <Link target="_blank" href={data.linkedIn}>
                    LinkedIn
                  </Link>
                </Button>
              )}

              {data?.whatsapp && (
                <Button asChild variant="link">
                  <Link target="_blank" href={data.whatsapp}>
                    WhatsApp
                  </Link>
                </Button>
              )}

              {data?.facebook && (
                <Button asChild variant="link">
                  <Link target="_blank" href={data.facebook}>
                    Facebook
                  </Link>
                </Button>
              )}

              {data?.instagram && (
                <Button asChild variant="link">
                  <Link target="_blank" href={data.instagram}>
                    Instagram
                  </Link>
                </Button>
              )}

              {data?.discord && (
                <Button asChild variant="link">
                  <Link target="_blank" href={data.discord}>
                    Discord
                  </Link>
                </Button>
              )}

              {data?.twitter && (
                <Button asChild variant="link">
                  <Link target="_blank" href={data.twitter}>
                    Twitter
                  </Link>
                </Button>
              )}

              {data?.email && (
                <Button asChild variant="link">
                  <Link target="_blank" href={`mailto:${data.email}`}>
                    Email
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default AboutPageContainer;
