import { HoverEffect } from "@/components/ui/card-hover-effect";

export const cards = [
  {
    title: "About me",
    description:
      "Welcome to my personal space! Here, I share not just who I am professionally, but also offer glimpses into my interests, hobbies, and the experiences that shape me. Explore to discover what makes me tick and the journey that brought me here.",
    link: "/about",
  },
  {
    title: "Projects",
    description:
      "Embark on a journey through my creative endeavors and professional projects. From innovative solutions to challenges and exciting ideas I've brought to life, this section showcases my passion for problem-solving and creating meaningful experiences.",
    link: "/projects",
  },
  {
    title: "Experience",
    description:
      "Delve into my extensive professional journey, where each role, project, and challenge has fueled my growth and passion for excellence. From hands-on experience to leadership roles, this section paints a vivid picture of my commitment to continuous learning and achievement.",
    link: "/experience",
  },
  {
    title: "Techstack",
    description:
      "Discover the diverse array of tools, technologies, and platforms I leverage in my journey as a technologist. From development frameworks to productivity apps, and even the games that inspire me, this section offers insights into my tech ecosystem and interests.",
    link: "/techstack",
  },
];

const GTKM = () => {
  return (
    <div className="max-w-8xl mx-auto px-8">
      <HoverEffect items={cards} />
    </div>
  );
};
export default GTKM;
