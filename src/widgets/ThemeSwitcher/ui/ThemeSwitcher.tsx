import React from "react";
import { useTheme } from "app/providers/ThemeProviders/lib/useTheme";
import { classNames } from "shared/lib/heplers/classNames";
import cls from "./ThemeSwitcher.module.scss";
import Sun from "shared/assets/icons/sun.svg";
import Moon from "shared/assets/icons/moon.svg";
import { Theme } from "app/providers/ThemeProviders";
import Button, { ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK ? <Sun fill="yellow" /> : <Moon fill="white" />}
    </Button>
  );
};

