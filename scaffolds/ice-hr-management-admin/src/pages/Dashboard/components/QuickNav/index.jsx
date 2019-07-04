import React from 'react';
import IceContainer from '@icedesign/container';
import goalIcon from './images/goal.svg';
import linkIcon from './images/link.svg';
import recoveryIcon from './images/recovery.svg';
import refuseIcon from './images/refuse.svg';
import checkIcon from './images/check.svg';
import sendIcon from './images/send.svg';
import checkinIcon from './images/checkin.svg';
import sendMailIcon from './images/send-mail.svg';
import styles from './index.module.scss';

const mockData = [
  {
    img: linkIcon,
    title: '员工管理',
    count: 1,
    backgroundColor: '#5e83fb',
  },
  {
    img: recoveryIcon,
    title: '通讯录',
    count: 3,
    backgroundColor: '#f7da47',
  },
  {
    img: refuseIcon,
    title: '考勤',
    count: 0,
    backgroundColor: '#58ca9a',
  },
  {
    img: checkIcon,
    title: '薪资福利',
    count: 1,
    backgroundColor: '#5e83fb',
  },
  {
    img: sendIcon,
    title: '审批',
    count: 2,
    backgroundColor: '#f7da47',
  },
  {
    img: checkinIcon,
    title: '组织架构',
    count: 0,
    backgroundColor: '#58ca9a',
  },
  {
    img: sendMailIcon,
    title: '合同管理',
    count: 1,
    backgroundColor: '#ee706d',
  },
  {
    img: goalIcon,
    title: '完成项目',
    count: 0,
    backgroundColor: '#ee706d',
  },
];

export default function QuickNav() {
  return (
    <IceContainer title="快捷导航">
      <div className={styles.content}>
        {mockData.map((item, index) => {
          return (
            <div className={styles.item} key={index}>
              <div
                className={styles.image}
                style={{
                  background: `${item.backgroundColor}`,
                }}
              >
                <img src={item.img} className={styles.iconImage} alt="" />
              </div>
              <p className={styles.itemTitle}>
                {item.title}
                <span className={styles.count}>{item.count}</span>
              </p>
            </div>
          );
        })}
      </div>
    </IceContainer>
  );
}
