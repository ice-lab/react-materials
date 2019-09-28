import React, { useState} from 'react';
import { Grid, Input, Select, DatePicker } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Filter() {
  const [value, setValue] = useState({});

  function handleFormChange(value) {
    console.log('value', value);
    setValue(value);
  };

  return (
    <IceFormBinderWrapper
      value={value}
      onChange={handleFormChange}
    >
      <Row wrap gutter="20"
      //  className={styles.formRow}
        >
        <Col l="8">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>页面名称：</span>
            <IceFormBinder triggerType="onBlur" name="pageName">
              <Input placeholder="请输入" size="large" />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="pageName" />
            </div>
          </div>
        </Col>
        <Col l="8">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>事件 ID：</span>
            <IceFormBinder triggerType="onBlur" name="eventId">
              <Input placeholder="请输入" size="large" />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="eventId" />
            </div>
          </div>
        </Col>
        <Col l="8">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>事件名称：</span>
            <IceFormBinder triggerType="onBlur" name="eventName">
              <Input placeholder="请输入" size="large" />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="eventName" />
            </div>
          </div>
        </Col>
        <Col l="8">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>类型：</span>
            <IceFormBinder triggerType="onBlur" name="type">
              <Select size="large" className={styles.newType}>
                <Select.Option value="miss">遗漏埋点</Select.Option>
                <Select.Option value="new">新增埋点</Select.Option>
              </Select>
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="type" />
            </div>
          </div>
        </Col>
        <Col l="8">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>日期：</span>
            <IceFormBinder triggerType="onBlur" name="date">
              <DatePicker size="large" className={styles.newDate} />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="date" />
            </div>
          </div>
        </Col>
      </Row>
    </IceFormBinderWrapper>
  );
}
