import React from 'react';
import 'app/styles/index.scss';

export const StyleDecorator = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);
