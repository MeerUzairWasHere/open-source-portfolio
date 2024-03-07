import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
type Prop = {
  title: string;
  id: string;
  OneLiner: string;
  screenshot: string;
};
const Card = ({ OneLiner, screenshot, title, id }: Prop) => {
  return (
    <div className="relative flex flex-col   text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
      <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <Image alt="image" src={screenshot} width={400} priority height={400} />
      </div>
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {OneLiner}
        </p>
      </div>
      <div className="p-6 pt-0">
        <Button asChild variant="secondary">
          <Link href={`/projects/${id}`}>View</Link>
        </Button>
      </div>
    </div>
  );
};
export default Card;
