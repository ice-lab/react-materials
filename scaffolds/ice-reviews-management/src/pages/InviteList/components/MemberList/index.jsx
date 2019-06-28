import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Dialog } from '@alifd/next';
import { withRouter, Link } from 'react-router-dom';
import ContainerTitle from '../../../../components/ContainerTitle';
import mockData from './data';
import styles from './index.module.scss';

function MemberList(props) {
  const [dataSource, setDataSource] = useState(mockData);

  const handleAdd = () => {
    props.history.push('/invite/add');
  };

  const handleDelete = (index) => {
    Dialog.confirm({
      content: '确认删除吗',
      onOk: () => {
        const data = [...dataSource];
        console.log(index);
        data.splice(index, 1);
        setDataSource(data);
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

  const renderOper = (value, index) => {
    return (
      <div>
        <Link to="/invite/add" className={styles.edit}>
          修改
        </Link>
        <a
          onClick={() => handleDelete(index)}
          className={styles.link}
        >
          删除
        </a>
      </div>
    );
  };

  return (
    <IceContainer className={styles.container}>
      <ContainerTitle
        title="邀请列表"
        buttonText="新增成员"
        className={styles.title}
        onClick={handleAdd}
      />
      <Table dataSource={dataSource} hasHeader={false} hasBorder={false}>
        <Table.Column dataIndex="name" cell={renderProfile} />
        <Table.Column dataIndex="email" />
        <Table.Column dataIndex="role" />
        <Table.Column dataIndex="id" cell={renderOper} />
      </Table>
    </IceContainer>
  );
}

export default withRouter(MemberList);
