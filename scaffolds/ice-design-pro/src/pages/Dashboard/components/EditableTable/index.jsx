import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Table, Button } from '@alifd/next';
import CellEditor from './CellEditor';
import styles from './index.module.scss';

function EditableTable(props) {
  const {
    intl: { formatMessage },
  } = props;

  const [dataSource, setData] = useState(generatorData());

  function generatorData() {
    return Array.from({ length: 5 }).map((item, index) => {
      return {
        todo: `${formatMessage({
          id: 'app.dashboard.todo.item.value',
        })} ${index}`,
        remark: `${formatMessage({
          id: 'app.dashboard.todo.remark.value',
        })} ${index}`,
        validity: '2017-12-12',
      };
    });
  }

  function renderOrder(value, index) {
    return <span>{index}</span>;
  }

  function deleteItem(index) {
    dataSource.splice(index, 1);
    setData([
      ...dataSource,
    ]);
  }

  function renderOperation(value, index) {
    return (
      <Button type="primary" onClick={() => deleteItem(index)}>
        <FormattedMessage id="app.dashboard.todo.delete" />
      </Button>
    );
  }

  function changeDataSource(index, valueKey, value) {
    dataSource[index][valueKey] = value;
    setData([
      ...dataSource,
    ]);
  }

  function renderEditor(valueKey, value, index, record) {
    return (
      <CellEditor
        valueKey={valueKey}
        index={index}
        value={record[valueKey]}
        onChange={changeDataSource}
      />
    );
  }

  function addNewItem() {
    const text = formatMessage({ id: 'app.dashboard.todo.empty' });
    dataSource.push({
      todo: text,
      remark: text,
      validity: text,
    });
    setData([
      ...dataSource,
    ]);
  }

  return (
    <IceContainer title={formatMessage({ id: 'app.dashboard.todo.title' })}>
      <Table
        dataSource={dataSource}
        hasBorder={false}
        className={styles.editableTable}
      >
        <Table.Column
          width={80}
          title={formatMessage({ id: 'app.dashboard.todo.index' })}
          cell={renderOrder}
        />
        <Table.Column
          width={280}
          title={formatMessage({ id: 'app.dashboard.todo.index' })}
          cell={(value, index, record) => {
            renderEditor('todo', value, index, record);
          }}
        />
        <Table.Column
          width={240}
          title={formatMessage({ id: 'app.dashboard.todo.remark' })}
          cell={(value, index, record) => {
            renderEditor('remark', value, index, record);
          }}
        />
        <Table.Column
          width={180}
          title={formatMessage({ id: 'app.dashboard.todo.time' })}
          cell={(value, index, record) => {
            renderEditor('validity', value, index, record);
          }}
        />
        <Table.Column
          title={formatMessage({ id: 'app.dashboard.todo.oper' })}
          width={80}
          cell={renderOperation}
        />
      </Table>
      <div onClick={addNewItem} className={styles.addNewItem}>
        + <FormattedMessage id="app.dashboard.todo.newline" />
      </div>
    </IceContainer>
  );
}

export default injectIntl(EditableTable);
