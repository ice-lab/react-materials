/// <reference types="react" />

import * as React from 'react';

export interface Props extends React.HTMLAttributes<HTMLElement> {
  status?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
  inverse?: boolean
}

export default class Label extends React.Component<Props, any> {}
