import React from 'react';
import IceContainer from '@icedesign/container';
import { Select, DatePicker } from '@alifd/next';
import styles from './index.module.scss';

export default function FilterBar() {
  /**
   * Select 发生改变的时候触发的回调
   */
  const handleSelectChange = (value) => {
    console.log('handleSelectChange:', value);
  };

  /**
   * DatePicker 发生改变的时候触发的回调
   */
  const handleDatePickerChange = (value) => {
    console.log('handleDatePickerChange:', value);
  };

  return (
    <IceContainer className={styles.container}>
      <Select
        size="large"
        style={{ width: '200px' }}
        onChange={handleSelectChange}
        defaultValue="taobao"
      >
        <Select.Option value="taobao">淘宝技术部</Select.Option>
        <Select.Option value="aliyun">阿里云事业部</Select.Option>
        <Select.Option value="dingding">钉钉事业部</Select.Option>
      </Select>
      <DatePicker size="large" onChange={handleDatePickerChange} />
    </IceContainer>
  );
}
