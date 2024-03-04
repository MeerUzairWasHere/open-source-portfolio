"use client";
import { ThemeProvider } from "@/components/theme-provider";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000 * 5,
          retry: 0,
        },
      },
    });
  });

  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange>
        <Toaster />
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
export default Providers;
