import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid, Icon, Balloon } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class Overview extends Component {
  renderHelp = () => {
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

  render() {
    const { data = [], title = '', col = 4 } = this.props;
    return (
      <IceContainer title={title}>
        <Row wrap>
          {data.map((item, index) => {
            const hasBorder = (index + 1) % col !== 0 ? styles.border : {};
            return (
              <Col
                l={24 / col}
                key={index}
                className={styles.item}
                style = {{hasBorder}}
              >
                <div className={styles.title}>
                  {item.title} {this.renderHelp()}
                </div>
                <div className={styles.value}>{item.value}</div>
              </Col>
            );
          })}
        </Row>
      </IceContainer>
    );
  }
}


