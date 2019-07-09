import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Icon, Button } from '@alifd/next';

const generatorData = () => {
  return Array.from({ length: 5 }).map((item, index) => {
    console.log('item', item);
    return {
      todo: `待办事项 ${index}`,
      memo: `备注说明文案 ${index}`,
      validity: '2017-12-12',
    };
  });
};

export default function SortableTable() {
  const [dataSource, setData] = useState(generatorData());

  const moveUp = (index) => {
    if (index > 0) {
      const prevItem = dataSource[index - 1];
      const currentItem = dataSource[index];
      dataSource.splice(index - 1, 2, currentItem, prevItem);
      setData(dataSource);
    }
  };

  const moveDown = (index) => {
    if (index < dataSource.length - 1) {
      const currentItem = dataSource[index];
      const nextItem = dataSource[index + 1];
      dataSource.splice(index, 2, nextItem, currentItem);
      setData(dataSource);
    }
  };

  const renderOrder = (value, index) => {
    return <span>{index}</span>;
  };

  const renderSortButton = (value, index) => {
    return (
      <div>
        <Button
          onClick={() => moveDown(index)}
          size="large"
          text
          disabled={index === dataSource.length - 1}
        >
          <Icon title="下移" type="descending" />
        </Button>
        <Button
          onClick={() => moveUp(index)}
          size="large"
          text
          disabled={index === 0}
        >
          <Icon title="上移" type="ascending" />
        </Button>
      </div>
    );
  };

  return (
    <div className="sortable-table">
      <IceContainer>
        <Table dataSource={dataSource} hasBorder={false}>
          <Table.Column width={80} title="顺序" cell={renderOrder} />
          <Table.Column width={280} title="待办事项" dataIndex="todo" />
          <Table.Column width={240} title="备注" dataIndex="memo" />
          <Table.Column width={180} title="有效时间" dataIndex="validity" />
          <Table.Column
            width={80}
            title="排序"
            cell={renderSortButton}
          />
        </Table>
      </IceContainer>
    </div>
  );
}
