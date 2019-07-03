import React from 'react';
import styles from './index.module.scss';

export default function Resource() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>标题简介</h3>
      <div className={styles.content}>
        <div className={styles.cellleftContent}>
          <div className={styles.infoBox}>
            <h6 className={styles.subTitle}>Design System</h6>
            <p className={styles.desc}>
              目前传统平台界面的设计语言存在着一些不足，比如色彩单一，大量线条的使用，分割化明显。其实，将这些不足归类一下就是界面单调，雷同性明显，缺少惊喜。也许新的平台类视觉风格可以打破这些束缚，尝试一些新的探索，启发传统的设计认知。因此，结合当下设计趋势，构思了一套新的平台产品设计语言。
            </p>
            <a href="#" className={styles.link}>
              访问站点
            </a>
          </div>
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/VvGnZYfUXGmgkJklZRDH.png_.webp"
            alt=""
            className={styles.imga}
          />
        </div>
        <div className={styles.cellrightContent}>
          <div className={styles.topItemBodyitemBody}>
            <div className={styles.itemBodyImg}>
              <img
                src="https://img.alicdn.com/tfs/TB1Od0ZnH_I8KJjy1XaXXbsxpXa-276-200.png_.webp"
                alt=""
                className={styles.imgt}
              />
            </div>
            <div className={styles.infoBox}>
              <h6 className={styles.subTitle}>标题简介</h6>
              <p className={styles.desc}>
                轻松操作页面管理，海量物料自由搭配，页面组合可视化操作更得心应手；开发调试一体化，集成运行环境零配置运行，开箱即用
              </p>
              <a href="#" className={styles.link}>
                访问站点
              </a>
            </div>
          </div>
          <div className={styles.bottomItemBodyitemBody}>
            <div className={styles.infoBox}>
              <h6 className={styles.subTitle}>标题简介</h6>
              <p className={styles.desc}>
                致力于在设计规范和基础组件的基础上，继续自下往上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『开发者』的体验
              </p>
              <a href="#" className={styles.link}>
                访问站点
              </a>
            </div>
            <div className={styles.itemBodyImg}>
              <img
                src="https://img.alicdn.com/tfs/TB1M00ZnH_I8KJjy1XaXXbsxpXa-352-240.png_.webp"
                alt=""
                className={styles.imgtr}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
