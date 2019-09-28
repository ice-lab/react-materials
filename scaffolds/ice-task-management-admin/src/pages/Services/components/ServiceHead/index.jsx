import React from 'react';
import { Button, Dialog } from '@alifd/next';
import styles from './index.module.scss';

export default function ServiceHead() {
  const handleClick = () => {
    Dialog.confirm({
      content: '只有管理员才能操作',
    });
  };

  return (
    <div className={styles.head}>
      <Button
        className={styles.btn}
        onClick={handleClick}
      >
          项目管理
      </Button>
      <Button type="primary" onClick={handleClick}>
          授权管理
      </Button>
    </div>
  );
}
