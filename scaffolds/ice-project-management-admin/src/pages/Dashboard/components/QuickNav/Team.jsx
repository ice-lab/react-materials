import React from 'react';
import IceContainer from '@icedesign/container';

import styles from './index.module.scss';

const MEMBERS = [
  {
    name: '淘小宝',
    title: '高级客户销售',
    avatar:
      'https://img.alicdn.com/tfs/TB19Erpw4TpK1RjSZFKXXa2wXXa-150-150.jpg',
  },
  {
    name: '张明',
    title: '资深客户经理',
    avatar:
      'https://img.alicdn.com/tfs/TB1w5jvw4TpK1RjSZFMXXbG_VXa-200-200.png',
  },
  {
    name: '李四',
    title: '客户销售专家',
    avatar:
      'https://img.alicdn.com/tfs/TB1zenmwYPpK1RjSZFFXXa5PpXa-200-200.png',
  },
  {
    name: '张三',
    title: '高级客户销售庄家',
    avatar:
      'https://img.alicdn.com/tfs/TB1n4rxwZfpK1RjSZFOXXa6nFXa-200-200.png',
  },
  {
    name: '淘小宝',
    title: '高级客户销售',
    avatar:
      'https://img.alicdn.com/tfs/TB19Erpw4TpK1RjSZFKXXa2wXXa-150-150.jpg',
  },
];

export default function Team() {
  return (
    <IceContainer className={styles.container}>
      <ul>
        {MEMBERS.map((member, index) => {
          return (
            <li className={styles.memberItem} key={index}>
              <img src={member.avatar} alt="" className={styles.memberAvatar} />
              <div className={styles.memberInfo}>
                <h6 className={styles.memberName}>{member.name}</h6>
                <p className={styles.memberTitle}>{member.title}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </IceContainer>
  );
}
