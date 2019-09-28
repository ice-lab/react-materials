import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Button } from '@alifd/next';
import CellEditor from './CellEditor';
import styles from './index.module.scss';

const data = [
  {
    text: '首页',
    path: '/home',
    attr: 'home',
  },
  {
    text: '文章列表',
    path: '/post/list',
    attr: 'post',
  },
  {
    text: '分类列表',
    path: '/cate/list',
    attr: 'cate',
  },
  {
    text: '添加用户',
    path: '/user/add',
    attr: 'user',
  },
  {
    text: '通用设置',
    path: '/setting/basic',
    attr: 'setting',
  },
];

export default function EditableTable() {
  const [dataSource, setDataSource] = useState(data);

  const renderOrder = (value, index) => {
    return <span>{index + 1}</span>;
  };

  const deleteItem = (index) => {
    dataSource.splice(index, 1);
    setDataSource([...dataSource]);
  };

  const renderOperation = (value, index) => {
    return (
      <Button onClick={() => deleteItem(index)} text>
        删除
      </Button>
    );
  };

  const changeDataSource = (index, valueKey, value) => {
    // text 将修改后的表格数据发送接口，持久化
    dataSource[index][valueKey] = value;
    setDataSource([...dataSource]);
  };

  const renderEditor = (valueKey, value, index, record) => {
    return (
      <CellEditor
        valueKey={valueKey}
        index={index}
        value={record[valueKey]}
        onChange={changeDataSource}
      />
    );
  };

  const addNewItem = () => {
    dataSource.push({
      text: '暂无',
      path: '暂无',
      attr: '暂无',
    });
    setDataSource([...dataSource]);
  };

  return (
    <div className={styles.editableTable}>
      <IceContainer>
        <Table dataSource={dataSource} hasBorder={false}>
          <Table.Column width={80} title="ID" cell={(value, index, record) => renderOrder(value, index, record)} />
          <Table.Column
            width={280}
            title="菜单文本"
            cell={(value, index, record) => renderEditor('text', value, index, record)}
          />
          <Table.Column
            width={240}
            title="菜单地址"
            cell={(value, index, record) => renderEditor('path', value, index, record)}
          />
          <Table.Column
            width={180}
            title="菜单属性"
            cell={(value, index, record) => renderEditor('attr', value, index, record)}
          />
          <Table.Column
            width={180}
            title="操作"
            cell={(value, index, record) => renderOperation(value, index, record)}
          />
        </Table>
        <div onClick={() => addNewItem()} className={styles.addNewItem}>
          + 新增一行
        </div>
      </IceContainer>
    </div>
  );
}
