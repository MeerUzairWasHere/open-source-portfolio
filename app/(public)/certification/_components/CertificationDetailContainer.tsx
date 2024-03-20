"use client";
import { getSingleCertificationAction } from "@/actions/certification.actions";
import { Mac } from "@/components/Mac";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";

const CertificationDetailContainer = ({
  certificationId,
}: {
  certificationId: string;
}) => {
  const { data } = useQuery({
    queryKey: ["certification", certificationId],
    queryFn: () => getSingleCertificationAction(certificationId),
  });

  return (
    <>
      <div className="flex px-4  items-center justify-end w-full">
        <Button className="  mt-6" asChild>
          <Link href=".">
            <>
              <MoveLeft width={10} className="mr-1" /> Back
            </>
          </Link>
        </Button>
      </div>
      <Mac
        title={data?.title || ""}
        screenshot={data?.screenshot || ""}
        oneLiner={data?.organizationName || ""}
      />

      <div className="md:py-10">
        <div className="container px-4 md:px-6">
          <div className="grid max-w-6xl gap-10 mx-auto items-start md:space-y-5 lg:grid-cols-3 lg:gap-16 lg:space-y-0">
            <div className="space-y-4 lg:col-span-2 lg:space-y-6">
              <div className="space-y-4">
                <div className=" ">
                  <Badge variant="secondary" className=" capitalize p-2">
                    {data?.organizationName}
                  </Badge>
                </div>
                <h1 className="text-3xl   font-bold tracking-tighter capitalize sm:text-4xl">
                  {data?.title}
                </h1>
                <p className="text-gray-500 capitalize dark:text-gray-400">
                  CredentionID ― {data?.credentialID}
                </p>
                <div className="flex flex-col     gap-2">
                  <h3 className="text-lg font-bold">What I learned:</h3>
                  <ul>
                    {data?.learned?.map((learn: any, index) => (
                      <li key={learn?.id}>
                        {`${index + 1}) `} {learn?.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="md:flex hidden flex-col gap-2">
                <Button asChild>
                  <Link target="_blank" href={data?.certificateUrl || ""}>
                    See Certification <MoveRight size={10} className="ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="md:hidden flex flex-col gap-2">
                <Button asChild>
                  <Link target="_blank" href={data?.certificateUrl || ""}>
                    See Certification <MoveRight size={10} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CertificationDetailContainer;
