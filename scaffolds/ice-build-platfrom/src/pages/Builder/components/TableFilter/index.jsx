/* eslint react/no-string-refs:0 */
import React, { useState, useRef } from 'react';
import { Button, DatePicker, Select, Input, Message } from '@alifd/next';
import { FormBinderWrapper, FormBinder } from '@icedesign/form-binder';
import styles from './index.module.scss';


export default function TableFilter(props) {
  const [startValue, setStartValue] = useState(null);
  const [endValue, setEndValue] = useState(null);
  const [endOpen, setEndOpen] = useState(false);
  const [value, setValue] = useState({});
  const form = useRef(null);

  function disabledStartDate(startVal) {
    if (!startVal || !endValue) {
      return false;
    }
    return startVal.valueOf() > endValue.valueOf();
  }

  function disabledEndDate(endVal) {
    if (!endVal || !startValue) {
      return false;
    }
    return endVal.valueOf() <= startValue.valueOf();
  }

  function onChange(field, val) {
    if (field === 'startValue') {
      setStartValue(val);
    }
    if (field === 'endValue') {
      setEndValue(val);
    }
    if (field === 'endOpen') {
      setEndOpen(val);
    }
    if (field === 'value') {
      setValue(val);
    }
  }

  function onStartChange(val) {
    onChange('startValue', val);
  }

  function onEndChange(val) {
    onChange('endValue', val);
  }

  function handleStartOpenChange(open) {
    if (!open) {
      setEndOpen(true);
    }
  }

  function handleEndOpenChange(open) {
    setEndOpen(open);
  }

  function handleSubmit() {
    const { validateFields } = form.current;
    validateFields((errors, values) => {
      if (errors) {
        Message.error('查询参数错误');
        return;
      }
      console.log(values);
      props.handleSubmit(values);
    });
  }

  return (
    <FormBinderWrapper value={value} ref={form}>
      <div className={styles.tableFilter}>
        <div className={styles.filterItem}>
          <span className={styles.filterLabel}>责任人：</span>
          <FormBinder name="person">
            <Input placeholder="请输入责任人" />
          </FormBinder>
        </div>
        <div className={styles.filterItem}>
          <span className={styles.filterLabel}>创建时间：</span>
          <FormBinder name="date">
            <div>
              <DatePicker
                disabledDate={disabledStartDate}
                value={startValue}
                placeholder="Start"
                onChange={onStartChange}
                onVisibleChange={handleStartOpenChange}
              />
              &nbsp;&nbsp;
              <DatePicker
                disabledDate={disabledEndDate}
                value={endValue}
                placeholder="End"
                onChange={onEndChange}
                visible={endOpen}
                onVisibleChange={handleEndOpenChange}
              />
            </div>
          </FormBinder>
        </div>
        <div className={styles.filterItem}>
          <span className={styles.filterLabel}>状态：</span>
          <FormBinder name="status">
            <Select>
              <Select.Option value="all">全部</Select.Option>
              <Select.Option value="success">成功</Select.Option>
              <Select.Option value="failed">失败</Select.Option>
            </Select>
          </FormBinder>
        </div>
        <Button
          type="primary"
          className={styles.submitButton}
          onClick={handleSubmit}
        >
          查询
        </Button>
      </div>
    </FormBinderWrapper>
  );
}
TableFilter.displayName = 'TableFilter';
