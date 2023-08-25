import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store.ts";

export const TestWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
