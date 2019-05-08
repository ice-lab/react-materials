import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';
const { Row, Col } = Grid;

class BadgeItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <Row
        wrap
        // style={{
        //   paddingTop: 20,
        //   alignItems: 'center',
        //   borderBottom: '1px solid #f4f4f4',
        // }}
        className={styles.row}
      >
        <Col className={styles.col} l={3} s={4} xxs={24}>
          <div >
            <img
              // style={{ width: 80, height: 80, display: 'block' }}
              className={styles.firstImg}
              src={data.icon}
            />
          </div>
        </Col>
        <Col className={styles.col}  l={11} s={10} xxs={24}>
          <h3 className={styles.titles}>{data.title}</h3>
          <div className={styles.desc}>{data.desc}</div>
        </Col>
        <Col className={styles.col}  l={4} s={4} xxs={24}>
          <div className={styles.status}>
            {data.status}
          </div>
        </Col>
        <Col className={styles.col} l={6} s={6} xxs={24}>
          <div className={styles.desc}>{data.detail}</div>
          <div>
            <a href={data.detailUrl} className={styles.detail}  >
              了解详情
            </a>
            <a href={data.recordUrl} className={styles.history} >
              历史记录
            </a>
          </div>
        </Col>
      </Row>
    );
  }
}

// const styles = {
//   title: {
//     margin: 0,
//     fontSize: 16,
//   },
//   desc: {
//     fontSize: 12,
//     color: '#999',
//     lineHeight: '20px',
//   },
// };

export default BadgeItem;
