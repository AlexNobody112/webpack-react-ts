import React, { useState } from "react";
import { classNames } from "shared/lib/heplers/classNames";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
  children?: React.ReactNode;
}

export const Sidebar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((state) => !state);
  };
  const { className } = props;
  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
    </div>
  );
};
