"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Anime from "./Anime";

import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col justify-center text-center">
      <Anime theme={theme} />
      The current theme is: {theme}
      <div className="flex flex-row gap-2 mt-5">
        <div
          className="flex flex-row gap-2 justify-center items-center bg-rose-400 py-2 px-4 text-white rounded-xl cursor-pointer"
          onClick={() => setTheme("light")}
        >
          <BsSun />
          Light Mode
        </div>
        <div
          className="flex flex-row gap-2 justify-center items-center bg-rose-400 py-2 px-4 text-white rounded-xl cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          <BsMoon />
          Dark Mode
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitch;
