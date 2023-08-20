import React from 'react';
import { classNames } from 'shared/lib/heplers/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
  children?: React.ReactNode;
}

export const Loader = (props: LoaderProps) => {
  const { className } = props;
  return (
    <div className={classNames('lds-roller', {}, [className])}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
