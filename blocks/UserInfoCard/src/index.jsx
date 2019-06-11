import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Balloon, Icon } from '@alifd/next';
import styles from './index.module.scss';

export default class UserInfoCard extends Component {
  static displayName = 'UserInfoCard';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer>
        <div className="user-info-card" className={styles.container}>
          <Balloon
            trigger={<a className={styles.triggerText}>张三</a>}
            closable={false}
          >
            <div className={styles.content}>
              <div className={styles.head}>
                <img
                  src={require('./images/TB13xyECxGYBuNjy0FnXXX5lpXa-484-488.png')}
                  className={styles.avatar}
                  alt="头像"
                />
                <div className={styles.baseInfo}>
                  <h5 className={styles.name}>张三</h5>
                  <p className={styles.deptName}>销售部 - 内销平台 - 售后服务</p>
                </div>
              </div>
              <ul className={styles.body}>
                <li className={styles.profileItem}>
                  <Icon type="map" size="xs" className={styles.itemIcon} /> 杭州
                </li>
                <li className={styles.profileItem}>
                  <Icon type="discount" size="xs" className={styles.itemIcon} />
                  销售专家
                </li>
                <li className={styles.profileItem}>
                  <Icon type="phone" size="xs" className={styles.itemIcon} />
                  871066160
                </li>
                <li className={styles.profileItem}>
                  <Icon type="mobile-phone" size="xs" className={styles.itemIcon} />
                  13867894321
                </li>
                <li className={styles.profileItem}>
                  <a href="mailto:ice-admin@alibaba-inc.com">
                    <Icon type="email" size="xs" className={styles.itemIcon} />
                    ice-admin@alibaba-inc.com
                  </a>
                </li>
                <li className={styles.profileItem}>
                  <Icon type="account" size="xs" className={styles.itemIcon} />
                  主管：李四
                </li>
              </ul>
            </div>
          </Balloon>
        </div>
      </IceContainer>
    );
  }
}
