"use client";

import { useTheme } from "next-themes";
import { Children, useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return <div>{theme === "dark" ? "Good Night !" : "Good Morning !"}</div>;
}
