/// <reference types="react" />

import * as React from 'react';

export interface Props extends React.HTMLAttributes<HTMLElement> {
  text?: string;
  decoration?: boolean;
  subtitle?: React.ReactNode;
}

export default class Title extends React.Component<Props, any> {}
