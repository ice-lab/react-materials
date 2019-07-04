import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Dialog } from '@alifd/next';
import { withRouter, Link } from 'react-router-dom';
import ContainerTitle from '../../../../components/ContainerTitle';
import styles from './index.module.scss';

const mockData = [
  {
    id: 1,
    avatar:
      'https://img.alicdn.com/tfs/TB18g0ydNTpK1RjSZR0XXbEwXXa-500-500.jpg',
    name: '淘小宝',
    email: 'ice-admin@alibaba-inc.com',
    role: 'owner',
  },
  {
    id: 2,
    avatar:
      'https://img.alicdn.com/tfs/TB18g0ydNTpK1RjSZR0XXbEwXXa-500-500.jpg',
    name: '淘小宝',
    email: 'ice-admin@alibaba-inc.com',
    role: 'member',
  },
  {
    id: 3,
    avatar:
      'https://img.alicdn.com/tfs/TB18g0ydNTpK1RjSZR0XXbEwXXa-500-500.jpg',
    name: '淘小宝',
    email: 'ice-admin@alibaba-inc.com',
    role: 'owner',
  },
  {
    id: 4,
    avatar:
      'https://img.alicdn.com/tfs/TB18g0ydNTpK1RjSZR0XXbEwXXa-500-500.jpg',
    name: '淘小宝',
    email: 'ice-admin@alibaba-inc.com',
    role: 'member',
  },
];

const MemberList = (props) => {
  const [data, setData] = useState(mockData);

  const handleAdd = () => {
    props.history.push('/add/member');
  };

  const handleDelete = (index) => {
    Dialog.confirm({
      content: '确认删除吗',
      onOk: () => {
        data.splice(index, 1);
        setData([...data]);
      },
    });
  };

  const renderProfile = (value, index, record) => {
    return (
      <div className={styles.profile}>
        <img src={record.avatar} alt="" className={styles.avatar} />
        <span className={styles.name}>{record.name}</span>
      </div>
    );
  };

  const renderOper = (value) => {
    return (
      <div>
        <Link to="/add/member" className={`${styles.link} ${styles.edit}`}>
          修改
        </Link>
        <a
          onClick={() => handleDelete(value)}
          className={`${styles.link} ${styles.delete}`}
        >
          删除
        </a>
      </div>
    );
  };

  return (
    <IceContainer className={styles.container}>
      <ContainerTitle
        title="项目成员"
        buttonText="添加成员"
        className={styles.title}
        onClick={handleAdd}
      />
      <Table dataSource={data} hasHeader={false} hasBorder={false}>
        <Table.Column dataIndex="name" cell={renderProfile} />
        <Table.Column dataIndex="email" />
        <Table.Column dataIndex="role" />
        <Table.Column dataIndex="id" cell={renderOper} />
      </Table>
    </IceContainer>
  );
};

export default withRouter(MemberList);
