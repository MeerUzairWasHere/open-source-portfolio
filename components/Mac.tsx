import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
type Props = {
  title: string;
  oneLiner: string;
  screenshot: string;
};
export function Mac({ oneLiner, screenshot, title }: Props) {
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
