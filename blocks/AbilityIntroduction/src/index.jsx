import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';
const { Row, Col } = Grid;

const frameworkIcon = require('./images/framework_icon.png');
const componentIcon = require('./images/component_icon.png');
const apiIcon = require('./images/api_icon.png');

const abilities = [
  {
    icon: frameworkIcon,
    title: '框架',
    content: '熟悉的社区开发模式，彻底的组件化能力',
    link: '/framework/',
  },
  {
    icon: componentIcon,
    title: '组件',
    content: '为开发者提供了一系列基础组件，通过组件组合进行高效开发',
    link: '/components/',
  },
  {
    icon: apiIcon,
    title: 'API',
    content: '手机淘宝能力支持和保障',
    link: '/api/',
  },
];

export default class Index extends Component {
  renderAblities = () => {
    return abilities.map(({ icon, title, content, link }, idx) => {
      return (
        <Col xxs="24" l="8" className={styles.item} key={idx}>
          <img src={icon}  className={styles.icon} alt="" />
          <div className={styles.icon_title}>
            {title}
          </div>
          <div
            className={styles.content}
          >
            {content}
          </div>
          <a href={link} className={styles.link}>
            了解更多
            <div
              className={styles.linkOne}
            >
              <div
                className={styles.linkTwo}
              />
            </div>
          </a>
        </Col>
      );
    });
  };
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>我们的能力</div>
        <div className={styles.subtitle}>&lt; Distinguishing Feature &gt;</div>
        <Row wrap className={styles.group}>
          {this.renderAblities()}
        </Row>
      </div>
    );
  }
}


