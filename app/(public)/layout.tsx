import { Navbar } from "@/components/Navbar";

export const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="h-full  ">
        <Navbar />
        <section className="w-full  md:max-w-screen-2xl mx-auto  px-4 pt-16 md:pt-20  ">
          <div className="flex gap-x-7">
            <div className="w-full ">{children}</div>
          </div>
        </section>
      </div>
    </>
  );
};
export default layout;
