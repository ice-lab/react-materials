/// <reference types="react" />

import * as React from 'react';

export interface Props extends React.HTMLAttributes<HTMLElement> {
  loading?: boolean;
  error?: React.ReactNode;
  empty?: React.ReactNode;
  title?: string;
}

export default class Container extends React.Component<Props, any> {}
