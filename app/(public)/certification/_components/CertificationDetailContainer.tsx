"use client";
import { getSingleCertificationAction } from "@/actions/certification.actions";
import { CertificationMac } from "@/components/CertificationMac";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CertificateType } from "@/lib/types/certification-types";
import { useQuery } from "@tanstack/react-query";
import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";

const CertificationDetailContainer = ({
  certificationId,
}: {
  certificationId: string;
}) => {
  const { data } = useQuery({
    queryKey: ["certificate", certificationId],
    queryFn: () => getSingleCertificationAction(certificationId),
  });

  return (
    <>
      <CertificationMac {...(data as CertificateType)} />

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
                  <div>
                    {data?.learned?.map((learn: any, index) => (
                      <li className="text-sm md:text-base" key={learn?.id}>
                        {learn?.text}
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-full flex-col gap-4">
              <div className="md:flex h-full hidden flex-col gap-2">
                <Button asChild>
                  <Link target="_blank" href={data?.certificateUrl || ""}>
                    See Certification <MoveRight size={10} className="ml-2" />
                  </Link>
                </Button>
                <Button className="mt-auto" asChild>
                  <Link href=".">
                    <>
                      <MoveLeft width={10} className="mr-1" /> Back
                    </>
                  </Link>
                </Button>
              </div>

              <div className="md:hidden flex flex-col gap-2">
                <Button asChild>
                  <Link target="_blank" href={data?.certificateUrl || ""}>
                    See Certification <MoveRight size={10} className="ml-2" />
                  </Link>
                </Button>
                <Button className="mt-auto" asChild>
                  <Link href=".">
                    <>
                      <MoveLeft width={10} className="mr-1" /> Back
                    </>
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
