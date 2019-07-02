import React from 'react';
import { Input, Select, Button, Message } from '@alifd/next';
import styles from './index.module.scss';

const { Option } = Select;

export default function SearchBar() {
  const handleClick = () => {
    Message.success('未搜索到符合添加的数据');
  };

  return (
    <div className={styles.container}>
      <span className={styles.caseNumber}>
        <label>
          案号: (
          <Input className={`${styles.input} ${styles.shortInput}`} />)
        </label>
        <Select
          placeholder="浙执"
          className={`${styles.select} ${styles.input}`}
        >
          <Option value="small">浙执1</Option>
          <Option value="medium">浙执2</Option>
          <Option value="large">浙执3</Option>
        </Select>
        字第
        <Input className={`${styles.input} ${styles.shortInput}`} />号
      </span>
      <span>
        <Button
          type="primary"
          className={styles.button}
          onClick={handleClick}
        >
          查询
        </Button>
      </span>
    </div>
  );
}


