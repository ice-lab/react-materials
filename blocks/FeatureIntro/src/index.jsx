import React from 'react';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function FeatureIntro() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>简短的标题简介</h2>
        <p className={styles.desc}>
          这里可以是一段描述，介绍该系统的相关功能和特点
        </p>
        <Row gutter="40">
          <Col l="8">
            <div className={styles.feature}>快 速</div>
            <p className={styles.featrueTitle}>相关的标题简介</p>
          </Col>
          <Col l="8">
            <div className={styles.feature}>简 约</div>
            <p className={styles.featrueTitle}>相关的标题简介</p>
          </Col>
          <Col l="8">
            <div className={styles.feature}>稳 定</div>
            <p className={styles.featrueTitle}>相关的标题简介</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
