"use client";

import { I18nProviderClient } from "@/locales/client";
import { ReactElement } from "react";

export default function SubLayout({
  children,
  params,
}: {
  children: ReactElement;
  params: { locale: string };
}) {
  return (
    <I18nProviderClient locale={params.locale}>{children}</I18nProviderClient>
  );
}
