import React from 'react';
import { classNames } from 'shared/lib/heplers/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
  children?: React.ReactNode;
}

export const NotFoundPage = (props: NotFoundPageProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      Страница не найдена
    </div>
  );
};
