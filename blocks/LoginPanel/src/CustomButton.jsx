import React from 'react';
import { Button } from '@alifd/next';
import styles from './index.module.scss';

const CustomButton = (props) => {
  return <Button {...props} className={`${styles.buttonCustom} ${props.className}`} />;
};

export default CustomButton;


