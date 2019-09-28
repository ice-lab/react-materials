import React from 'react';
import IceContainer from '@icedesign/container';
import { Table, Pagination, Progress, Button } from '@alifd/next';
import EditDialog from './EditDialog';
import data from './data';
import styles from './index.module.scss';

export default function Index(){
  const renderTitle = (value, index, record) => {
    return (
      <div>
        <div>{record.title}</div>
        <div className={styles.subTitle}>创建时间 {record.createTime}</div>
      </div>
    );
  };

  const editItem = (index, record) => {
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

  const renderOperations = (value, index, record) => {
    return (
      <div className={styles.operations}>
        <Button
          className={styles.operationButton}
          onClick={() => editItem(index, record)}
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

  const renderProgress = (value) => {
    return <Progress percent={value} />;
  };

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
            cell={renderTitle}
            width={320}
          />
          <Table.Column
            title="完成进度"
            dataIndex="progress"
            width={230}
            cell={renderProgress}
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
            cell={renderOperations}
          />
        </Table>
        <div className={styles.pagination}>
          <Pagination />
        </div>
      </IceContainer>
    </div>
  );
}

