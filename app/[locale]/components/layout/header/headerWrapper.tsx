"use client";
import React from "react";
import { I18nProviderClient, useCurrentLocale } from "@/locales/client";

export default function HeaderWrapper({ children }: any) {
  const currentLocale = useCurrentLocale();
  return (
    <I18nProviderClient locale={currentLocale}>{children}</I18nProviderClient>
  );
}
