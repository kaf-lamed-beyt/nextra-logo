import React from "react";
import { useState, useEffect } from "react";

interface Props {
  light: string;
  dark: string;
}

const Logo: React.FC<Props> = ({ light, dark }) => {
  let isThemeDark = false;
  if (typeof window !== "undefined") {
    isThemeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  const [darkMode, setDarkMode] = useState(isThemeDark);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleThemeChange = (e: MediaQueryListEvent) =>
        setDarkMode(e.matches);

      mediaQuery.addListener(handleThemeChange);

      // clean up
      return () => mediaQuery.removeListener(handleThemeChange);
    }

    return () => {};
  }, []);

  return (
    <img src={darkMode ? light : dark} alt="Logo" width="120" height="120" />
  );
};

export default Logo;
