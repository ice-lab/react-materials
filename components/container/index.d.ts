/// <reference types="react" />

import * as React from 'react';

export interface Props extends React.HTMLAttributes<HTMLElement> {
  loading?: boolean;
  error?: any;
  empty?: any;
  title?: string;
}

export default class Container extends React.Component<Props, any> {}
