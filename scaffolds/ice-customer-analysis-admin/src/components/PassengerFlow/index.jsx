import React, { Component } from 'react';
import { DatePicker, Grid, Icon } from '@alifd/next';
import IceContainer from '@icedesign/container';
import ContainerTitle from '../ContainerTitle';
import styles from './index.module.scss';
const { Row, Col } = Grid;

const mockData = [
  {
    title: '卖品区总客流量',
    value: '233,495',
    ratio: '66%',
    change: 'up',
  },
  {
    title: '卖品区日均客流',
    value: '4,592',
    ratio: '22%',
    change: 'down',
  },
  {
    title: '平均停留时长',
    value: '0.8h',
    ratio: '10%',
    change: 'up',
  },
];

export default class PassengerFlow extends Component {
  render() {
    const { title } = this.props;
    return (
      <IceContainer>
        <ContainerTitle
          title={title}
          extraAfter={
            <DatePicker onChange={(val, str) => console.log(val, str)} />
          }
          className={styles.titleMargin}
        />
        <Row wrap gutter="20">
          {mockData.map((item, index) => {
            return (
              <Col l="4" key={index}>
                <div className={styles.item}>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.num}>{item.value}</div>
                  <div className={styles.ratio}>
                    <Icon
                      type={`arrow-${item.change}-filling`}
                      size="small"
                      className={styles[`arrow${item.change}Icon`]}
                      className={styles.arrowIcon}
                    />
                    环比上涨 {item.ratio}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </IceContainer>
    );
  }
}


