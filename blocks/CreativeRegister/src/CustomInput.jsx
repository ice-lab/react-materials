import React from 'react';
import { Input } from '@alifd/next';
import styles from './index.module.scss';

const CustomInput = (props) => {
  return <Input {...props} className={styles.input} />;
};

export default CustomInput;

// const styles = {
//   input: {
//     width: '320px',
//     borderRadius: 0,
//     borderTop: 0,
//     borderLeft: 0,
//     borderRight: 0,
//     borderColor: '#ebedf2',
//   },
// };
