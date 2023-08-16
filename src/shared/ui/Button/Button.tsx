import React, { ButtonHTMLAttributes } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib/heplers/classNames";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.Buttons, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
