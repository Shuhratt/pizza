import React, { FC, ReactNode } from "react";
import { Header } from "@components/header/Header";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
