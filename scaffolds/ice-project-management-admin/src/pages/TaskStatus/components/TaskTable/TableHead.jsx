import React, { useState } from 'react';
import { Grid, Input, Select } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';

import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function TableHead(props) {
  const [value] = useState({});

  const formChange = (v) => {
    props.onChange(v);
  };

  return (
    <IceFormBinderWrapper
      value={value}
      onChange={formChange}
    >
      <Row wrap gutter="20" className={styles.formRow}>
        <Col l="8">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>任务状态：</span>
            <IceFormBinder triggerType="onBlur">
              <Select name="status" className={{ width: '200px' }}>
                <Select.Option value="option1">未解决</Select.Option>
                <Select.Option value="option2">已解决</Select.Option>
                <Select.Option value="option3">已解决</Select.Option>
              </Select>
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="status" />
            </div>
          </div>
        </Col>
        <Col l="8">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>Assign By：</span>
            <IceFormBinder triggerType="onBlur">
              <Input placeholder="请输入" name="by" />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="by" />
            </div>
          </div>
        </Col>
        <Col l="8">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>Assign To：</span>
            <IceFormBinder triggerType="onBlur">
              <Input placeholder="请输入" name="to" />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="to" />
            </div>
          </div>
        </Col>
      </Row>
    </IceFormBinderWrapper>
  );
}
