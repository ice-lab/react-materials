import React from 'react';
import styles from './index.module.scss';

export default function Introduction() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>产品简介</h3>
      <p className={styles.desc}>
        丰富模板一键创建，提供多种垂直领域模板，快速创建项目，支持风格切换，满足个性化需求；轻松操作页面管理，海量物料自由搭配，页面组合可视化操作更得心应手；开发调试一体化，集成运行环境零配置运行，开箱即用。致力于在设计规范和基础组件的基础上，继续自下往上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『开发者』的体验
      </p>
    </div>
  );
}
