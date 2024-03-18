import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getAdminDetail } from "@/actions/admin.actions";
import MyContext from "../MyContext";

export const layout = async ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["admin"],
    queryFn: () => getAdminDetail(),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MyContext>
          <div className="h-full flex flex-col justify-between  ">
            <Navbar />
            <section className="w-full md:max-w-screen-2xl mx-auto  py-10  ">
              <div className="flex gap-x-7">
                <div className="w-full">{children}</div>
              </div>
            </section>
            <Footer />
          </div>
        </MyContext>
      </HydrationBoundary>
    </>
  );
};
export default layout;
