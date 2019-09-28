import React from 'react';
import { Input, Select, DatePicker, Button } from '@alifd/next';
import styles from './index.module.scss';

const { Option } = Select;

export default function FormPanel() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <label className={styles.label}>
          承办组:
          <Select className={`${styles.select} ${styles.input}`}>
            <Option value="small">淘小宝1</Option>
            <Option value="medium">淘小宝2</Option>
            <Option value="large">淘小宝3</Option>
          </Select>
        </label>
        <label className={styles.label}>
          承办组组长:
          <Input className={styles.input} />
        </label>
        <label className={styles.label}>
          承办人:
          <Select className={`${styles.select} ${styles.input}`}>
            <Option value="small">淘小宝1</Option>
            <Option value="medium">淘小宝2</Option>
            <Option value="large">淘小宝3</Option>
          </Select>
        </label>
        <label className={styles.label}>
          书记员:
          <Select className={`${styles.select} ${styles.input}`}>
            <Option value="small">淘小宝1</Option>
            <Option value="medium">淘小宝2</Option>
            <Option value="large">淘小宝3</Option>
          </Select>
        </label>
        <label className={styles.label}>
          发放时间:
          <DatePicker placeholder="Start" className={styles.input} />
        </label>
        <label className={styles.label}>
          排期时间:
          <DatePicker placeholder="Start" className={styles.input} />
        </label>
      </div>
      <div>
        <Button className={styles.button}>保存</Button>
        <Button className={styles.button}>重置</Button>
        <Button className={styles.button}>取消</Button>
      </div>
    </div>
  );
}
