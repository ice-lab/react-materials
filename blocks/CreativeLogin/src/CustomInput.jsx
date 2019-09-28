import React from 'react';
import { Input } from '@alifd/next';
import styles from './index.module.scss';

const CustomInput = (props) => {
  return <Input {...props} className={styles.input} />;
};

export default CustomInput;

