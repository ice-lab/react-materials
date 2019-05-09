import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid, Button, Icon } from '@alifd/next';
import styles from './index.module.scss';


const { Row, Col } = Grid;

export default class UserData extends Component {
  static displayName = 'UserData';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row wrap gutter={20} className= {styles.contianer}>
        <Col xxs="24" l="8">
          <IceContainer>
            <div className={styles.content}>
              <div className={styles.imgWrap}>
                <img
                  src={require('./images/email.png')}
                  alt=""
                  className={styles.img}
                />
              </div>

              <h2 className={styles.count}>9.25k Subscribers</h2>
              <p className={styles.desc}>Your main list is growing!</p>

              <Button type="primary" size="large" className={styles.button}>
                <Icon type="set" className={styles.icon} /> Manage list
              </Button>
            </div>
          </IceContainer>
        </Col>
        <Col xxs="24" l="8">
          <IceContainer>
            <div className={styles.content}>
              <div className={styles.imgWrap}>
                <img
                  src={require('./images/twitter.png')}
                  alt=""
                  className={styles.img}
                />
              </div>
              <h2 className={styles.count}>+36 followes</h2>
              <p className={styles.desc}>You are doing great!</p>


              <Button type="primary" size="large" className={styles.button}>
                <Icon type="personal-center" className={styles.icon} />Check them
                out
              </Button>
            </div>
          </IceContainer>
        </Col>
        <Col xxs="24" l="8">
          <IceContainer>
            <div className={styles.content}>
              <div className={styles.imgWrap}>
                <img
                  src={require('./images/check.png')}
                  alt=""
                  className={styles.img}
                />
              </div>
              <h2 className={styles.count}>Business Plan</h2>
              <p className={styles.desc}>This is your current active plan</p>
              <Button type="primary" size="large" className={styles.button}>
                <Icon type="lights" className={styles.icon} />Upgrade to VIP
              </Button>
            </div>
          </IceContainer>
        </Col>
      </Row>
    );
  }
}
