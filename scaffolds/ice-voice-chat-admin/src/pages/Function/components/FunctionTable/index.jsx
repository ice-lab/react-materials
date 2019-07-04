import React from 'react';
import { Input, Table } from '@alifd/next';
import styles from './index.module.scss';

export default function FunctionTable({ data }) {
  return (
    <div>
      <div className={styles.head}>
        <div className={styles.info}>
          <h2 className={styles.title}>本项目共包含 {data.length} 个函数</h2>
          <p className={styles.intro}>
            函数是定义对话回复逻辑的一种方式。成功上传的函数后，在项目发布时开始生效。
          </p>
        </div>
        <Input
          style={{ width: '300px' }}
          placeholder="请输入函数名称或者函数描述"
        />
      </div>
      <Table hasBorder={false} dataSource={data}>
        <Table.Column title="函数名" dataIndex="name" />
        <Table.Column title="描述" dataIndex="desc" />
        <Table.Column title="语言类型" dataIndex="language" />
        <Table.Column title="关联技能" dataIndex="skill" />
        <Table.Column title="发布状态" dataIndex="status" />
      </Table>
    </div>
  );
}
