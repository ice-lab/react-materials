import React, { Component } from 'react';
import Container from '@icedesign/container';
import Img from '@icedesign/img';
import styles from './index.module.scss';

class UserLanding extends Component {
  state = {
    userLevel: ['L0', 'L1', 'L2', 'L3', 'L4', 'L5', 'L6'],
    userCurrentLevel: 'L5',
  };

  render() {
    return (
      <Container className={styles.container}>
        <div className={styles.avatarWrapper}>
          <a href="#">
            <Img
              width={64}
              height={64}
              src={require('./images/avatar.jpg')}
              className={styles.avatar}
            />
          </a>
          <img
            alt="用户等级"
            src={require('./images/level.png')}
            className={styles.level}
          />
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userDetail}>
            <a href="#">
              <span className={styles.userName}>淘小宝</span>
            </a>
            <div className={styles.userLabel}>官方账号</div>
          </div>
          <div className={styles.userOther}>绑定机构：阿里巴巴飞冰团队</div>
          <div className={styles.userOther}>认证信息：hello 大家好！</div>
        </div>
        <div className={styles.userAttribute}>
          <div className={styles.userLevelWrapper}>
            <div className={styles.userLevelLine} />
            {this.state.userLevel.map((level, index) => {
              const isCurrent = this.state.userCurrentLevel === level;
              return (
                <div


                className = {`${styles.userlevelItem} ${ index ===0 ?styles.levelMarginLeftOne : styles.levelMarginLeftTwo} ${isCurrent ? styles.levelBackgroundOne : styles.levelBackgroundTwo } `}
                 
                  key={index}
                >
                  {level}
                  {isCurrent && (
                    <div className={styles.userLevelLight}>当前等级</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    );
  }
}



export default UserLanding;
