/// <reference types="react" />

import * as React from 'react';

export interface Props extends React.HTMLAttributes<HTMLElement> {
  loading?: boolean;
  error?: any;
  empty?: any;
  style?: React.CSSProperties;
  className?: string;
  title?: string;
  children?: React.ReactNode;
}

export default class Container extends React.Component<Props, any> {}
