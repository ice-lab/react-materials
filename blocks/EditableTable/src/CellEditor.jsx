import React, { useState } from 'react';
import { Icon, Input } from '@alifd/next';
import styles from './index.module.scss';

let tempValue = '';
export default function CellEditor(props) {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(props.value || '');
  const { index, valueKey } = props;

  const editThisCell = () => {
    // 缓存数据以便回滚
    tempValue = value;
    setEditMode(true);
  };

  const onValueChange = (value) => {
    setValue(value);
  };

  const updateValue = () => {
    setEditMode(false);
    props.onChange && props.onChange(index, valueKey, value);
  };

  const rollBackThisCell = () => {
    setValue(tempValue);
    setEditMode(false);
    tempValue = '';
  };

  if (editMode) {
    return (
      <div className={styles.celleditor}>
        <Input
          className={styles.cellInput}
          value={value}
          onChange={onValueChange}
        />
        <span
          className={styles.operationIcon}
          title="确定"
          onClick={updateValue}
        >
          <Icon size="xs" type="select" />
        </span>
        <span
          className={styles.operationIcon}
          title="撤销"
          onClick={rollBackThisCell}
        >
          <Icon size="xs" type="refresh" />
        </span>
      </div>
    );
  }
  return (
    <div className={styles.celleditor}>
      <span>{value}</span>
      <span
        className={styles.hb}
        title="编辑"
        onClick={editThisCell}
      >
        <Icon size="xs" type="edit" />
      </span>
    </div>
  );
}
