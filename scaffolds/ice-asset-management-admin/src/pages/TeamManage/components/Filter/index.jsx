import React from 'react';
import IceContainer from '@icedesign/container';
import { Select, DatePicker } from '@alifd/next';
import styles from './index.module.scss';

export default function Filter() {
  /**
   * Select 发生改变的时候触发的回调
   */
  function handleSelectChange(value) {
    console.log('handleSelectChange:', value);
  }

  /**
   * DatePicker 发生改变的时候触发的回调
   */
  function handleDatePickerChange(value) {
    console.log('handleDatePickerChange:', value);
  }

  return (
    <IceContainer className={styles.container}>
      <Select
        className={styles.selectWidth}
        onChange={handleSelectChange}
        defaultValue="frontend"
      >
        <Select.Option value="frontend">前端团队</Select.Option>
        <Select.Option value="backend">后端团队</Select.Option>
        <Select.Option value="business">业务团队</Select.Option>
        <Select.Option value="operation">运营团队</Select.Option>
      </Select>
      <DatePicker onChange={handleDatePickerChange} />
    </IceContainer>
  );
}


