/// <reference types="react" />

import * as React from 'react';

/**
 * copy from async-validate: https://github.com/yiminghe/async-validator/blob/master/src/index.d.ts
 */
type RuleType =
| 'string'
| 'number'
| 'boolean'
| 'method'
| 'regexp'
| 'integer'
| 'float'
| 'array'
| 'object'
| 'enum'
| 'date'
| 'url'
| 'hex'
| 'email'
| 'any';

interface Rules {
  [field: string]: RuleItem | RuleItem[];
}

interface ValidateOption {
  // whether to suppress internal warning
  suppressWarning?: boolean;

  // when the first validation rule generates an error stop processed
  first?: boolean;

  // when the first validation rule of the specified field generates an error stop the field processed, 'true' means all fields.
  firstFields?: boolean | string[];
}

interface ValidateSource {
  [field: string]: any;
}

interface RuleItem {
  type?: RuleType; // default type is 'string'
  required?: boolean;
  pattern?: string;
  min?: number; // Range of type 'string' and 'array'
  max?: number; // Range of type 'string' and 'array'
  len?: number; // Length of type 'string' and 'array'
  enum?: Array<string | number | boolean | null | undefined>; // possible values of type 'enum'
  whitespace?: boolean;
  fields?: Rules; // ignore when without required
  transform?: (value: any) => any;
  message?: string;
  validator?: (
    rule: Rules,
    value: any,
    callback: (error: string | string[]) => void,
    source: ValidateSource,
    options: ValidateOption,
  ) => void;
}
interface ValidateError {
  message: string;
  field: string;
}
/** async-validate end */

export interface WrapperProps extends React.HTMLAttributes<HTMLElement> {
  enableScrollErrorField?: boolean;
  scrollErrorFieldTopOffset?: number;
  value?: any;
  onChange?: (value: any) => void;
}
export class FormBinderWrapper extends React.Component<WrapperProps, any> {}
export default FormBinderWrapper

export interface BinderProps extends React.HTMLAttributes<HTMLElement>, RuleItem {
    name?: string,
    setFieldValue?: (value: any) => any,
    getFieldValue?: (value: any) => any,
    triggerType?: 'onChange' | String,
    valuePropName?: string,
    rules?: Rules,
}
export class FormBinder extends React.Component<BinderProps, any> {}

export interface ErrorProps extends React.HTMLAttributes<HTMLElement> {
  name?: string;
  render?: (errors: ValidateError[]) => React.ReactElement<any> | React.ReactNode;
}
export class FormError extends React.Component<ErrorProps, any> {}
