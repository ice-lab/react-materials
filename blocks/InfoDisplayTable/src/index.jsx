import React from 'react';
import { Table } from '@alifd/next';
import IceContainer from '@icedesign/container';
import './InfoDisplayTable.scss';

/**
 * 表格接收的数据
 */
const dataSource = () => {
  return [
    {
      label: '姓名',
      value: '张三',
    },
    {
      label: '性别',
      value: '男',
    },
    {
      label: '年龄',
      value: '25',
    },
    {
      label: '籍贯',
      value: '杭州',
    },
    {
      label: '职业',
      value: '程序员',
    },
  ];
};

export default function Index() {
  return (
    <div className="info-display-table">
      <IceContainer>
        <Table dataSource={dataSource()}>
          <Table.Column title="个人信息" dataIndex="label" />
          <Table.Column title="" dataIndex="value" />
        </Table>
      </IceContainer>
    </div>
  );
}
