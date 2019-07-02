import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Select } from '@alifd/next';
import CustomTable from './CustomTable';
import styles from './index.module.scss';

export default function DepartmentCost() {
  const [type, setType] = useState('all');

  const changeType = (type) => {
    setType(type);
  }

  return (
    <IceContainer className={`${styles.container} department-cost`}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>部门费用总览</div>
        <Select onChange={changeType} value={type} size="small">
          {
            ['all', 'cost'].map((item) => {
              return <Select.Option value={item} key={item}>{item}</Select.Option>;
            })
          }
        </Select>
      </div>
      <div className={styles.content}>
        <CustomTable />
      </div>
    </IceContainer>
  );
}


