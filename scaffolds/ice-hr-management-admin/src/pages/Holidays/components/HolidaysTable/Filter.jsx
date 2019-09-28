import React, { useState } from 'react';
import { Grid, DatePicker, Select } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';

import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Filter(props) {
  const [formValue] = useState({});

  function formChange(value) {
    props.onChange(value);
  }

  return (
    <IceFormBinderWrapper
      value={formValue}
      onChange={formChange}
    >
      <Row wrap gutter="20" className={styles.formRow}>
        <Col l="8">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>开始日期：</span>
            <IceFormBinder triggerType="onBlur" name="startTime">
              <DatePicker placeholder="请输入" />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="startTime" />
            </div>
          </div>
        </Col>
        <Col l="8">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>结束日期：</span>
            <IceFormBinder triggerType="onBlur" name="endTime">
              <DatePicker placeholder="请输入" />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="endTime" />
            </div>
          </div>
        </Col>
        <Col l="8">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>假期类型：</span>
            <IceFormBinder triggerType="onBlur" name="type">
              <Select name="type" className={styles.select}>
                <Select.Option value="1">休年假</Select.Option>
                <Select.Option value="2">事假</Select.Option>
                <Select.Option value="3">调休</Select.Option>
              </Select>
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="type" />
            </div>
          </div>
        </Col>
      </Row>
    </IceFormBinderWrapper>
  );
}
