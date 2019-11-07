/// <reference types="react" />

import * as React from 'react';

export interface PanelProps extends React.HTMLAttributes<HTMLElement> {
  value: string;
  text?: React.ReactNode;
  align?: 'left' | 'right' | 'top' | 'bottom';
  bgColor?: string;
  fgColor?: string;
  level?: 'L' | 'M' | 'Q' | 'H';
  size?: number;
}

export class Panel extends React.Component<PanelProps, any> {}

declare interface QrCodeIconProps extends React.HTMLAttributes<HTMLElement> {}

declare class QrCodeIcon extends React.Component<QrCodeIconProps, any> {}

export interface QrcodeProps extends PanelProps {
  triggerSize?: 'xxs' | 'xs' | 'small' | 'medium' | 'large' | 'xl' | 'xxl';
  triggerStyle?: React.CSSProperties;
  trigger?: React.ReactNode;
}

export default class Qrcode extends React.Component<QrcodeProps, any> {}
