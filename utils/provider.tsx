"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { I18nProviderClient, useCurrentLocale } from "@/locales/client";

function Providers({ children }: React.PropsWithChildren) {
  const queryClient = new QueryClient();
  const currentLocale = useCurrentLocale();
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProviderClient locale={currentLocale}>{children}</I18nProviderClient>
    </QueryClientProvider>
  );
}

export default Providers;
