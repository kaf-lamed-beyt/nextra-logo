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
  const { theme, systemTheme } = useTheme();

  return (
    <div style={{ display: "flex", gap: ".6em" }}>
      <img
        src={theme || systemTheme === "dark" ? light : dark}
        width={size}
        height={size}
        alt={
          theme || systemTheme === dark ? "dark theme logo" : "light theme logo"
        }
      />
      {logoText ? (
        <div className="brand-name">
          <p
            style={{
              margin: "auto",
              fontSize: textSize,
              fontWeight: textWeight,
            }}
          >
            {logoText}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Logo;
