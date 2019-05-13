import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Dialog } from '@alifd/next';
import { withRouter, Link } from 'react-router-dom';
import ContainerTitle from '../../../../components/ContainerTitle';
import mockData from './data';
import styles from './index.module.scss';

@withRouter
export default class MemberList extends Component {
  state = {
    data: mockData,
  };

  handleAdd = () => {
    this.props.history.push('/invite/add');
  };

  handleDelete = (index) => {
    Dialog.confirm({
      content: '确认删除吗',
      onOk: () => {
        const { data } = this.state;

        data.splice(index, index + 1);
        this.setState({
          data,
        });
      },
    });
  };

  renderProfile = (value, index, record) => {
    return (
      <div className={styles.profile}>
        <img src={record.avatar} alt="" className={styles.avatar} />
        <span className={styles.name}>{record.name}</span>
      </div>
    );
  };

  renderOper = (value) => {
    return (
      <div>
        <Link to="/invite/add" className={styles.edit}>
          修改
        </Link>
        <a
          onClick={() => this.handleDelete(value)}
          className={styles.link}
        >
          删除
        </a>
      </div>
    );
  };

  render() {
    const { data } = this.state;
    return (
      <IceContainer className={styles.container}>
        <ContainerTitle
          title="邀请列表"
          buttonText="新增成员"
          className={styles.title}
          onClick={this.handleAdd}
        />
        <Table dataSource={data} hasHeader={false} hasBorder={false}>
          <Table.Column dataIndex="name" cell={this.renderProfile} />
          <Table.Column dataIndex="email" />
          <Table.Column dataIndex="role" />
          <Table.Column dataIndex="id" cell={this.renderOper} />
        </Table>
      </IceContainer>
    );
  }
}
