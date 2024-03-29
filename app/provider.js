"use client";

import { ThemeProvider } from "next-themes";

const Provider = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Provider;
