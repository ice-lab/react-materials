import React from 'react';
import { Input, Table, Dialog } from '@alifd/next';
import styles from './index.module.scss';

export default function EntitlesTable({ data }) {
  const handleEdit = () => {
    Dialog.confirm({
      title: '提示',
      content: '只有管理员权限才能编辑',
    });
  };

  const handleDelete = () => {
    Dialog.confirm({
      title: '提示',
      content: '只有管理员权限才能删除',
    });
  };

  const renderOper = () => {
    return (
      <div className={styles.oper}>
        <a className={styles.button} onClick={handleEdit}>
          编辑
        </a>
        <a className={styles.button} onClick={handleDelete}>
          删除
        </a>
      </div>
    );
  };
  return (
    <div>
      <div className={styles.searchBar}>
        <div className={styles.info}>本主题包含 {data.length} 个实体</div>
        <Input
          style={{ width: '300px' }}
          placeholder="请输入实体名称"
        />
      </div>
      <Table hasBorder={false} dataSource={data}>
        <Table.Column title="索引" dataIndex="id" />
        <Table.Column title="实体名称" dataIndex="name" />
        <Table.Column title="描述" dataIndex="desc" />
        <Table.Column title="预览" dataIndex="preview" />
        <Table.Column title="关联技能" dataIndex="skill" />
        <Table.Column title="操作" cell={renderOper} />
      </Table>
    </div>
  );
}
