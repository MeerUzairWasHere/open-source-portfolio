import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import { CertificateType } from "@/lib/types/certification-types";

export function CertificationMac({ screenshot, title }: CertificateType) {
  return (
    <div className="overflow-hidden  dark:bg-[#000] bg-white w-full">
      <MacbookScroll
        title={<span>{title}</span>}
        src={screenshot}
        showGradient={false}
      />
    </div>
  );
}
