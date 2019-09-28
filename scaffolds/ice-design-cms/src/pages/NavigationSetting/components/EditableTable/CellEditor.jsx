import React, { useState } from 'react';
import { Icon, Input } from '@alifd/next';
import styles from './index.module.scss';

export default function CellEditor(props) {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(props.value || '');
  let tempValue;

  const editThisCell = () => {
    // 缓存数据以便回滚
    tempValue = value;
    setEditMode(true);
  };

  const onValueChange = newValue => setValue(newValue);

  const updateValue = () => {
    setEditMode(false);
    const { index, valueKey } = props;
    props.onChange && props.onChange(index, valueKey, value);
  };

  const rollBackThisCell = () => {
    setValue(tempValue);
    setEditMode(false);
    tempValue = '';
  };


  if (editMode) {
    return (
      <div className="celleditor">
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
    <div className="celleditor">
      <span>{value}</span>
      <span
        className={`${styles.operationIcon} celleditor-trigger`}
        title="编辑"
        onClick={editThisCell}
      >
        <Icon size="xs" type="edit" />
      </span>
    </div>
  );
}
