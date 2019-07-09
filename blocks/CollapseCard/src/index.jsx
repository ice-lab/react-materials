import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Icon, Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Index() {
  const [collapse, setCollapse] = useState(false);

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  const collapseStyle = collapse ? styles.collapse : null;
  return (
    <div className="collapse-card">
      <IceContainer>
        <div className={styles.summaryInfo}>
          <img
            className={styles.itemLogo}
            src={require('./images/TB1EBQ.hZLJ8KJjy0FnXXcFDpXa-300-300.png')}
            alt=""
          />
          <div className={styles.infoIntro}>
            <h3 className={styles.infoTitle}>戴森</h3>
            <p className={styles.infoDesc}>
              作为一家英国创新科技公司,戴森致力于设计和研发能用科技来简化人们生活的产品.戴森官方旗舰店保修长达5年,您可以在戴森官方联络中心购买零件,每周7天提供服务{' '}
            </p>
          </div>
        </div>
        <Row
          className={`${styles.baseInfo} ${collapseStyle}`}
        >
          <Col xxs="24" xs="12" s="12" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>活动标题：</span>
            <span >戴森周年庆活动</span>
          </Col>
          <Col xxs="24" xs="12" s="12" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>店铺名称：</span>
            <span >戴森周年庆活动</span>
          </Col>
          <Col xxs="24" xs="12" s="12" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>开始时间：</span>
            <span >2017-10-18 12:20:07</span>
          </Col>
          <Col xxs="24" xs="12" s="12" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>结束时间：</span>
            <span >2017-12-18 12:20:07</span>
          </Col>
        </Row>
        <div
          className={`toggle-btn ${styles.toggleBtn}`}
        >
          <a
            // className="toggle-btn"
            className={`toggle-btn ${styles.toggleBtn}`}
            onClick={toggleCollapse}
          >
            <span className={styles.spanMarginRight}>
              {collapse ? '更多信息' : '收起'}
            </span>
            <Icon size="xs" type={collapse ? 'arrow-down' : 'arrow-up'} />
          </a>
        </div>
      </IceContainer>
    </div>
  );
}
