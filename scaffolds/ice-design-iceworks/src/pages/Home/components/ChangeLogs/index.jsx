import React, { Component } from 'react';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import styles from './index.module.scss'

const ScrollOverPack = ScrollAnim.OverPack;

export default class ChangeLogs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changelogs: [
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
      ],
    };
  }

  renderChangeLogs = (changelogs = []) => {
    const renders = [];
    changelogs.forEach((v) => {
      renders.push(
        <h3 key={`${v.version}-title`} className={styles.featureTag}>
          v{v.version} <span className={styles.featureDate}>{v.releaseDate}</span>
        </h3>
      );
      renders.push(
        <ol key={`${v.version}-content`}>
          {Array.isArray(v.changelog) &&
            v.changelog.map((desc, idx) => <li key={idx}>{desc}</li>)}
        </ol>
      );
    });
    return renders;
  };

  render() {
    const { changelogs } = this.state;

    return (
      <div className={styles.container}>
        <ScrollOverPack always={false} playScale={0.5} className={styles.features}>
          <QueueAnim key="anim" type="bottom">
            <h1 className={styles.featureTitle}>更新历史</h1>
            {this.renderChangeLogs(changelogs)}
          </QueueAnim>
        </ScrollOverPack>
      </div>
    );
  }
}
