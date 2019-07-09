import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Button } from '@alifd/next';
import CellEditor from './CellEditor';
import styles from './index.module.scss';

const generatorData = () => {
  return Array.from({ length: 5 }).map((item, index) => {
    return {
      todo: `待办事项 ${index}`,
      memo: `备注说明文案 ${index}`,
      validity: '2017-12-12',
    };
  });
};

export default function EditableTable() {
  const [dataSource, setData] = useState(generatorData());

  const renderOrder = (value, index) => {
    return <span>{index}</span>;
  };

  const deleteItem = (index) => {
    dataSource.splice(index, 1);
    setData(dataSource);
  };

  const renderOperation = (value, index) => {
    return (
      <Button onClick={() => deleteItem(index)} text>
        删除
      </Button>
    );
  };

  const changeDataSource = (index, valueKey, value) => {
    dataSource[index][valueKey] = value;
    setData(dataSource);
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
      todo: '暂无',
      memo: '暂无',
      validity: '暂无',
    });
    setData(dataSource);
  };

  return (
    <div className={styles.editableTable}>
      <IceContainer>
        <Table dataSource={dataSource} hasBorder={false}>
          <Table.Column width={80} title="顺序" cell={renderOrder} />
          <Table.Column
            width={280}
            title="待办事项"
            cell={(value, index, record) => renderEditor('todo', value, index, record)}
          />
          <Table.Column
            width={240}
            title="备注"
            cell={(value, index, record) => renderEditor('memo', value, index, record)}
          />
          <Table.Column
            width={180}
            title="有效时间"
            cell={(value, index, record) => renderEditor('validity', value, index, record)}
          />
          <Table.Column title="操作" width={80} cell={renderOperation} />
        </Table>
        <div onClick={addNewItem} className={styles.addNewItem}>
          + 新增一行
        </div>
      </IceContainer>
    </div>
  );
}
