import React, { useState } from 'react';
import styles from './index.module.scss';

export default function ChangeLogs() {
  const [changelogs] = useState([
    {
      changelog: [
        '[修复] Windows 版本提示存在多个启动进程的问题',
        '[修复] 新建页面-布局选择器 缩略图错误问题',
      ],
      releaseDate: '2018年05月07日',
      version: '2.0.3',
    },
    {
      changelog: ['[修复] 启动时出现错误弹窗问题'],
      releaseDate: '2018年05月05日',
      version: '2.0.2',
    },
    {
      changelog: [
        '[特性] 支持创建 Vue 项目',
        '[新增] 自定义物料',
        '[新增] 插件管理面板',
        '[新增] 自定义模板功能',
      ],
      releaseDate: '2018年05月04日',
      version: '2.0.1',
    },
    {
      changelog: [
        '[特性] 支持创建 Vue 项目',
        '[新增] 自定义物料',
        '[新增] 插件管理面板',
        '[新增] 自定义模板功能',
      ],
      releaseDate: '2018年05月04日',
      version: '2.0.0',
    },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.features}>
        <h1 className={styles.featureTitle}>更新历史</h1>
        {
          changelogs.map((v) => {
            return (
              <div>
                <h3 key={`${v.version}-title`} className={styles.featureTag}>
                  v
                  {v.version}
                  {' '}
                  <span className={styles.featureDate}>{v.releaseDate}</span>
                </h3>
                <ol key={`${v.version}-content`}>
                  {Array.isArray(v.changelog)
                    && v.changelog.map((desc, idx) => <li key={idx}>{desc}</li>)}
                </ol>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
