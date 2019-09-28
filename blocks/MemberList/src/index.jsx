import React from 'react';
import IceContainer from '@icedesign/container';
import { Table } from '@alifd/next';
import ContainerTitle from './ContainerTitle';
import styles from './index.module.scss';

export default function MemberList() {
  const renderProfile = (value, index, record) => {
    return (
      <div className={styles.profile}>
        <img src={record.avatar} alt="" className={styles.avatar} />
        <span className={styles.name}>{record.name}</span>
      </div>
    );
  };

  const renderOper = () => {
    return (
      <div>
        <a className={styles.edit}>修改</a>
        <a className={styles.link}>删除</a>
      </div>
    );
  };

  const dataSource = [
    {
      avatar: require('./images/avatar.jpg'),
      name: '淘小宝',
      email: 'ice-admin@alibaba-inc.com',
      role: 'owner',
    },
    {
      avatar: require('./images/avatar.jpg'),
      name: '宝码',
      email: 'ice-admin@alibaba-inc.com',
      role: 'member',
    },
  ];

  return (
    <IceContainer className={styles.container}>
      <ContainerTitle
        title="项目成员"
        buttonText="添加成员"
        className={styles.title}
      />
      <Table dataSource={dataSource} hasHeader={false} hasBorder={false}>
        <Table.Column dataIndex="name" cell={renderProfile} />
        <Table.Column dataIndex="email" />
        <Table.Column dataIndex="role" />
        <Table.Column cell={renderOper} />
      </Table>
    </IceContainer>
  );
}
