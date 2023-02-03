import React from "react";
import { useTheme } from "next-themes";

interface logoProps {
  dark: string;
  light: string;
}

const Logo: React.FC<logoProps> = ({ dark, light }) => {
  const { theme, systemTheme } = useTheme();

  console.log("current theme", theme, systemTheme);

  if (theme === "dark") {
    return <img src={light} width="120" height="120" alt="dark theme logo" />;
  }

  return <img src={dark} width="120" height="120" alt="light logo" />;
};

export default Logo;
