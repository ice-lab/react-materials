/// <reference types="react" />

import * as React from 'react';

export interface Props extends React.HTMLAttributes<HTMLElement> {
  confirmText?: string;
  cancelText?: string;
  title?: string;
  onCancel?: (e: any) => void;
  onConfirm?: (e: any) => void;
  Icon?: React.ReactNode;
}

export default class BalloonConfirm extends React.Component<Props, any> {}
