import React, { useState } from 'react';
import { classNames } from 'shared/lib/heplers/classNames';
import Button from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export function Sidebar(props: SidebarProps) {
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
      <Button onClick={onToggle}>toggle</Button>
    </div>
  );
}
