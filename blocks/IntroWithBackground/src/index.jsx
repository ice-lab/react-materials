import React from 'react';
import { Button } from '@alifd/next';
import  styles from './index.module.scss';

export default function Index() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inntroContent}>
        <h3 className={styles.title}>海量物料</h3>
        <div className={styles.titleLine}>
          <div className={styles.titleHighlightLine} />
        </div>
        <p className={styles.desc}>
          专业视觉设计，每周物料更新，丰富组合区块，不同领域模板
          自定义主题配置，响应式设计，海量物料满足您开发所需
        </p>
        <Button
          component="a"
          href="#"
          target="_blank"
          className={styles.extraButton}
        >
          了解更多 &gt;
        </Button>
      </div>
      <div className={styles.background}>
        <div className={styles.grayOverlay} />
        <div className={styles.backgroundImage} />
      </div>
      <div className={styles.topClipTriange} />
      <div className={styles.bottomClipTriange} />
    </div>
  );
}
