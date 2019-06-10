import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Pagination, Progress, Button } from '@alifd/next';
import EditDialog from './EditDialog';
import data from './data';
import styles from './index.module.scss';

export default class Index extends Component {
  renderTitle = (value, index, record) => {
    return (
      <div>
        <div>{record.title}</div>
        <div className={styles.subTitle}>创建时间 {record.createTime}</div>
      </div>
    );
  };

  editItem = (index, record) => {
    EditDialog.show({
      onClose: () => {
        EditDialog.hide();
      },
      onCancel: () => {
        EditDialog.hide();
      },
      onOk: () => {
        EditDialog.hide();
      },
      value: record,
    });
  };

  renderOperations = (value, index, record) => {
    return (
      <div className={styles.operations}>
        <Button
          className={styles.operationButton}
          onClick={() => this.editItem(index, record)}
          text
        >
          编辑
        </Button>
        <Button className={styles.operationButton} text>
          删除
        </Button>
      </div>
    );
  };

  renderProgress = (value) => {
    return <Progress percent={value} />;
  };

  render() {
    return (
      <div className="complex-progress-table">
        <IceContainer className={styles.tableCard}>
          <Table
            dataSource={data}
            className="basic-table"
            // className={styles.basicTable}
            hasBorder={false}
          >
            <Table.Column
              title="问题描述"
              cell={this.renderTitle}
              width={320}
            />
            <Table.Column
              title="完成进度"
              dataIndex="progress"
              width={230}
              cell={this.renderProgress}
            />
            <Table.Column
              title="优先级"
              dataIndex="priority"
              width={60}
              className={styles.priority}
            />
            <Table.Column
              title="操作"
              width={100}
              cell={this.renderOperations}
            />
          </Table>
          <div className={styles.pagination}>
            <Pagination />
          </div>
        </IceContainer>
      </div>
    );
  }
}

