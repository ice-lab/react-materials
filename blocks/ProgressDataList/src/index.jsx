import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Progress, Grid } from '@alifd/next';
import { enquireScreen } from 'enquire-js';
import styles from './index.module.scss'

const { Row, Col } = Grid;

export default class ProgressDataList extends Component {
  static displayName = 'ProgressDataList';

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
  }

  componentDidMount() {
    this.enquireScreenRegister();
  }

  enquireScreenRegister = () => {
    const mediaCondition = 'only screen and (max-width: 720px)';

    enquireScreen((mobile) => {
      this.setState({
        isMobile: mobile,
      });
    }, mediaCondition);
  };

  render() {
    return (
      <IceContainer>
        <Row wrap>
          <Col xxs="24" s="12" l="6" className={styles.dataItem}>
            <div className={styles.dataTitle}>总收入</div>
            <div className={styles.dataIntro}>所有项目收入</div>
            <div className={styles.dataValue}>￥10M</div>
            <div className={styles.dataProgress}>
              <Progress percent={30} />
            </div>
            <div className={styles.dataExtra}>
              <div>
                <a className={styles.settingsLink} href="#">
                  设置
                </a>
              </div>
              <div>30%</div>
            </div>
            {!this.state.isMobile && <div className={styles.verticalLine}/>}
          </Col>
          <Col xxs="24" s="12" l="6" className={styles.dataItem}>
            <div className={styles.dataTitle}>今年新用户</div>
            <div className={styles.dataIntro}>今年新注册用户</div>
            <div className={styles.dataValue}>2000</div>
            <div className={styles.dataProgress}>
              <Progress percent={80} />
            </div>
            <div className={styles.dataExtra}>
              <div>
                <a className={styles.settingsLink} href="#">
                  设置
                </a>
              </div>
              <div>80%</div>
            </div>
            {!this.state.isMobile && <div className={styles.verticalLine} />}
          </Col>
          <Col xxs="24" s="12" l="6" className={styles.dataItem}>
            <div className={styles.dataTitle}>本月新订单</div>
            <div className={styles.dataIntro}>本月新增订单数</div>
            <div className={styles.dataValue}>579</div>
            <div className={styles.dataProgress}>
              <Progress percent={60} />
            </div>
            <div className={styles.dataExtra}>
              <div>
                <a className={styles.settingsLink} href="#">
                  设置
                </a>
              </div>
              <div>60%</div>
            </div>
            {!this.state.isMobile && <div className={styles.verticalLine} />}
          </Col>
          <Col xxs="24" s="12" l="6" className={styles.dataItem}>
            <div className={styles.dataTitle}>用户反馈待处理</div>
            <div className={styles.dataIntro}>用户反馈待处理的数量</div>
            <div className={styles.dataValue}>10</div>
            <div className={styles.dataProgress}>
              <Progress percent={10} />
            </div>
            <div className={styles.dataExtra}>
              <div>
                <a className={styles.settingsLink} href="#">
                  设置
                </a>
              </div>
              <div>10%</div>
            </div>
          </Col>
        </Row>
      </IceContainer>
    );
  }
}
