import React, { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/heplers/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  children: React.ReactNode;
}

function Button(props: ButtonProps) {
  const {
    className, children, theme, ...otherProps
  } = props;
  return (
    <button
      type="button"
      className={classNames(cls.Buttons, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
