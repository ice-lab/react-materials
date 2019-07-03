import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid, Icon, Balloon } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Overview(props) {
  const renderHelp = () => {
    return (
      <Balloon
        trigger={<Icon type="help" size="xs" />}
        align="t"
        alignEdge
        closable={false}
      >
        相关说明
      </Balloon>
    );
  };

  const { data = [], title = '', col = 4 } = props;
  return (
    <IceContainer title={title}>
      <Row wrap>
        {data.map((item, index) => {
          const hasBorder = (index + 1) % col !== 0 ? styles.border : '';
          return (
            <Col
              l={24 / col}
              key={index}
              className={`${styles.item} ${hasBorder}`}
            >
              <div className={styles.title}>
                {item.title} {renderHelp()}
              </div>
              <div className={styles.value}>{item.value}</div>
            </Col>
          );
        })}
      </Row>
    </IceContainer>
  );
}
