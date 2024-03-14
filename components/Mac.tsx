import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import { Project } from "@/lib/types/project-types";

export function Mac({ oneLiner, screenshot, title }: Project) {
  return (
    <div className="overflow-hidden dark:bg-[#000] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            {title} <br /> <br />"{oneLiner}"
          </span>
        }
        src={screenshot}
        showGradient={false}
      />
    </div>
  );
}
