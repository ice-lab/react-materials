/// <reference types="react" />

import * as React from 'react';

export interface IceQrcodePanelProps extends React.HTMLAttributes<HTMLElement> {
  value: string;
  text?: React.ReactNode;
  align?: 'left' | 'right' | 'top' | 'bottom';
  bgColor?: string;
  fgColor?: string;
  level?: 'L' | 'M' | 'Q' | 'H';
  size?: number;
}

export class IceQrcodePanel extends React.Component<IceQrcodePanelProps, any> {}

export interface QrCodeIconProps extends React.HTMLAttributes<HTMLElement> {}

export class QrCodeIcon extends React.Component<QrCodeIconProps, any> {}

export interface IceQrcodeProps extends IceQrcodePanelProps {
  triggerSize?: 'xxs' | 'xs' | 'small' | 'medium' | 'large' | 'xl' | 'xxl';
  triggerStyle?: React.CSSProperties;
  trigger?: React.ReactNode;
}

export class IceQrcode extends React.Component<IceQrcodeProps, any> {}
export default IceQrcode
