import React from 'react';
import { Button } from '@alifd/next';
import styles from './index.module.scss';

const CustomButton = (props) => {
  return <Button {...props} style={{...props.style}} className={styles.button} />;
};

export default CustomButton;


