import React from 'react';
import { Icon, Balloon } from '@alifd/next';
import styles from './index.module.scss';

export default function Head(props) {
  const { title, content, total } = props;
  return (
    <div className={styles.metaWrap}>
      <div className={styles.meta}>
        <span className={styles.title}>{title}</span>
        <span className={styles.action}>
          <Balloon
            trigger={<Icon type="help" size="xs" className={styles.promptIcon} />}
            align="t"
            closable={false}
            triggerType="hover"
            className={styles.newHover }
          >
            {content}
          </Balloon>
        </span>
      </div>
      <div className={styles.total}>{total}</div>
    </div>
  );
}
