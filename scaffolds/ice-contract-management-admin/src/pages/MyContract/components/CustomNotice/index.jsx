import React from 'react';
import { Message } from '@alifd/next';
import styles from  './index.module.scss';

const CustomNotice = () => {
  const renderNum = (num, color) => {
    return <strong style={{...color }} className={styles.num}>{num}</strong>;
  };

  return (
    <Message
      closeable
      className={styles.customnotice}
      className={styles.notice}
      title={
        <div className={styles.title1}>
          当前共有
          {renderNum(1, {color: '#F04631'})}
          份合同，其中已倒签 {renderNum(0, {color: '#F04631'})}
          份、一周后会倒签的合同
          {renderNum(0, {color: '#F04631'})}
          份、需要我去跟进盖章事宜的合同
          {renderNum(0, {color: '#48AAE6'})}
          份、一个月内会到期的合同
          {renderNum(0, {color: '#48AAE6'})}
          份！
        </div>
      }
    />
  );
};

export default CustomNotice;
