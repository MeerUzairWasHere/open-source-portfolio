import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import { Project } from "@/lib/types/project-types";

export function ProjectMac({ screenshot, title }: Project) {
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
