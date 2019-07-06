import React, { useState } from 'react';
import { Button, DatePicker, Select } from '@alifd/next';
import styles from './index.module.scss'

export default function TableFilter() {
  const [startValue, setStartValue] = useState(null);
  const [endValue, setEndValue] = useState(null);
  const [endOpen, setEndOpen] = useState(false);

  const disabledStartDate = (startValue) => {
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  const disabledEndDate = (endValue) => {
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  const onStartChange = (value) => {
    setStartValue(value);
  };

  const onEndChange = (value) => {
    setEndValue(value);
  };

  const handleStartOpenChange = (open) => {
    if (!open) {
      setEndOpen(true);
    }
  };

  const handleEndOpenChange = (open) => {
    setEndOpen(open);
  };

  return (
    <div className={styles.tableFilter}>
      <div className={styles.filterItem}>
        <span>调价日期：</span>
        <DatePicker
          disabledDate={disabledStartDate}
          value={startValue}
          placeholder="Start"
          onChange={onStartChange}
          onOpenChange={handleStartOpenChange}
        />
        &nbsp;&nbsp;
        <DatePicker
          disabledDate={disabledEndDate}
          value={endValue}
          placeholder="End"
          onChange={onEndChange}
          visible={endOpen}
          onOpenChange={handleEndOpenChange}
        />
      </div>
      <div className={styles.filterItem}>
        <span>状态：</span>
        <Select>
          <Select.Option value="all">全部</Select.Option>
          <Select.Option value="checked">已审核</Select.Option>
          <Select.Option value="unCheck">未审核</Select.Option>
        </Select>
      </div>
      <Button type="primary" className={styles.submitButton}>
        查询
      </Button>
    </div>
  );
}
