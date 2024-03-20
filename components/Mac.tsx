import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import { useMyContext } from "@/app/MyContext";
type Props = {
  title: string;
  oneLiner: string;
  screenshot: string;
};
export function Mac({ oneLiner, screenshot, title }: Props) {
  const data = useMyContext();
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
