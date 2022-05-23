import React from "react";
import { AutoProvider } from "context/auto-index";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <AutoProvider>{children}</AutoProvider>;
};
