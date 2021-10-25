/// <reference types="react" />

import * as React from 'react';

export interface ImgProps extends React.HTMLAttributes<HTMLElement> {
  type?: 'cover' | 'contain';
  src: string;
  alt?: string;
  title?: string;
  errorImgSrc?: string;
  width?: number;
  height?: number;
  shape?: string;
  enableAliCDNSuffix?: boolean
  onError?: React.ReactEventHandler<HTMLElement>;
}

export class Img extends React.Component<ImgProps, any> {}
export default Img

interface ContainProps extends ImgProps {}
export class Contain extends React.Component<ContainProps, any> {}

interface CoverProps extends ImgProps {}
export class Cover extends React.Component<CoverProps, any> {}
