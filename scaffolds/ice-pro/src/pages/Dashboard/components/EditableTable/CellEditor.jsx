import React, { useState, useEffect } from 'react';
import { Icon, Input } from '@alifd/next';

let tempValue = '';
export default function CellEditor(props) {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(props.value || '');

  useEffect(() => {
    if ('value' in props) {
      setValue(props[value]);
    }
  }, [props, value]);

  function editThisCell() {
    // 缓存数据以便回滚
    tempValue = value;
    setEditMode(true);
  }

  function onValueChange(inputValue) {
    setValue(inputValue);
  }

  function updateValue() {
    setEditMode(false);
    const { index, valueKey } = props;
    props.onChange && props.onChange(index, valueKey, value);
  }

  function rollBackThisCell() {
    setEditMode(false);
    setValue(tempValue);
    tempValue = '';
  }

  if (editMode) {
    return (
      <div className="celleditor">
        <Input
          style={styles.cellInput}
          value={value}
          onChange={onValueChange}
        />
        <span
          style={styles.operationIcon}
          title="确定"
          onClick={updateValue}
        >
          <Icon size="xs" type="select" />
        </span>
        <span
          style={styles.operationIcon}
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
        style={styles.operationIcon}
        className="celleditor-trigger"
        title="编辑"
        onClick={editThisCell}
      >
        <Icon size="xs" type="edit" />
      </span>
    </div>
  );
}

const styles = {
  cellInput: {
    width: 'calc(100% - 44px)',
  },
  operationIcon: {
    marginLeft: '10px',
    color: '#999',
    cursor: 'pointer',
  },
};
