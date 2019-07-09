import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Tab, Button, Grid } from '@alifd/next';
import IceEllipsis from '@icedesign/ellipsis';
import data from './data';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Index() {
  const [tabData] = useState(data);

  const renderContent = (items) => {
    return items.map((item, index) => {
      return (
        <Col xxs="24" s="12" l="8" key={index}>
          <div className={styles.columnCard}>
            <div className={styles.cardTitle}>{item.title}</div>
            <div className={styles.cardDescWrapper}>
              <div className={styles.cardDesc}>
                <IceEllipsis lineLimit={6} text={item.desc} />
              </div>
            </div>
            <div className={styles.cardBtnWrapper}>
              <Button
                type="primary"
                component="a"
                href="http://www.taobao.com"
                target="_blank"
                size="large"
              >
                申请频道
              </Button>
            </div>
          </div>
        </Col>
      );
    });
  };

  return (
    <div className="info-display-tab">
      <IceContainer>
        <Tab>
          <Tab.Item title="全部频道" key="1">
            <Row wrap gutter={20}>
              {tabData.all ? renderContent(tabData.all) : '暂无数据'}
            </Row>
          </Tab.Item>
          <Tab.Item title="可申请频道" key="2">
            <Row wrap gutter={20}>
              {tabData.apply ? renderContent(tabData.apply) : '暂无数据'}
            </Row>
          </Tab.Item>
          <Tab.Item title="已获得频道" key="3">
            <Row wrap gutter={20}>
              {tabData.existing
                ? renderContent(tabData.existing)
                : '暂无数据'}
            </Row>
          </Tab.Item>
        </Tab>
      </IceContainer>
    </div>
  );
}
