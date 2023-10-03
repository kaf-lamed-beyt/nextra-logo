import React from "react";
import { useTheme } from "next-themes";

interface logoProps {
  dark: string;
  light: string;
}

const Logo: React = ({ dark, light }: logoProps) => {
  const { theme } = useTheme();

  if (theme === "dark") {
    return <img src={light} width="120" height="120" alt="dark theme logo" />;
  }

  return <img src={dark} width="120" height="120" alt="light logo" />;
};

export default Logo;
