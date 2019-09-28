import React from 'react';

import styles from './index.module.scss';

export default ({ title, style = {}, className = '', ...props }) => {
  return (
    <h3 {...props} className={`${styles.title} ${className}`} style={style}>
      {title}
    </h3>
  );
};
