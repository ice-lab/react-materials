import React from 'react';
import styles from './index.module.scss';

export default function Solution() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imgbox}>
          <img
            alt=""
            src="https://img.alicdn.com/tfs/TB1re2fvVOWBuNjy0FiXXXFxVXa-346-320.png_.webp"
            className={styles.img}
          />
        </div>
        <div className={styles.infobox}>
          <h3 className={styles.title}>提交方案</h3>
          <p className={styles.desc}>
            磨刀不负砍柴工。做任何需求前，先看现有场景库能否满足，如果不能，我们建议你将这类需求抽象成一个新的场景模板，并在讨论区中提交自己的方案。委员会成员确认后，我们将及时补充到库中让更多的同学用上。
          </p>
          <a href="#" className={styles.link}>
            提交我的方案
          </a>
        </div>
      </div>
    </div>
  );
}
