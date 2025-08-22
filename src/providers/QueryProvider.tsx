import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import type { PropsWithChildren } from "react";

export const QueryProvider = ({ children }: PropsWithChildren) => {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 2,
            staleTime: 1000 * 30,
          },
        },
      })
  );
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
