import React from "react";
import { useTheme } from "next-themes";

interface logoProps {
  dark: string;
  light: string;
  size: string;
  logoText?: string;
  textSize?: string;
  textWeight?: string;
}

const Logo = ({
  dark,
  light,
  size,
  logoText,
  textSize,
  textWeight,
}: logoProps) => {
  const { theme } = useTheme();

  // if (theme === "dark") {
  //   return <img src={light} width={size} height={size} alt="dark theme logo" />;
  // }

  return (
    <div
      style={{ display: logoText ? "" : "flex", gap: logoText ? "" : ".6em" }}
    >
      <img
        src={theme === "dark" ? light : dark}
        width={size}
        height={size}
        alt={theme === dark ? "dark theme logo" : "light theme logo"}
      />{" "}
      {logoText ? (
        <span
          style={{ margin: "auto", fontSize: textSize, fontWeight: textWeight }}
        >
          {logoText}
        </span>
      ) : null}
    </div>
  );
};

export default Logo;
