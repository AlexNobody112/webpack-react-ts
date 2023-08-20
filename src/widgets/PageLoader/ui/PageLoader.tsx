import React from 'react';
import { classNames } from 'shared/lib/heplers/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
  children?: React.ReactNode;
}

export const PageLoader = (props: PageLoaderProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
