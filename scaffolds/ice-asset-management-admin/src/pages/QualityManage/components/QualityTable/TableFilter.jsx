import React, { useState } from 'react';
import { Grid, Input, Select } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Filter(props) {
  const [value] = useState({});

  const formChange = (formValue) => {
    props.onChange(formValue);
  };

  return (
    <IceFormBinderWrapper
      value={value}
      onChange={formChange}
    >
      <Row wrap gutter="20" className={styles.formRow}>
        <Col l="8">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>平均分：</span>
            <IceFormBinder triggerType="onBlur" name="average">
              <Input placeholder="请输入" />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="average" />
            </div>
          </div>
        </Col>
        <Col l="8">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>标准分：</span>
            <IceFormBinder triggerType="onBlur" name="standard">
              <Input placeholder="请输入" />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="standard" />
            </div>
          </div>
        </Col>
        <Col l="8">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>所有表个数：</span>
            <IceFormBinder triggerType="onBlur" name="alltable">
              <Input placeholder="请输入" />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="alltable" />
            </div>
          </div>
        </Col>
        <Col l="8">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>等级：</span>
            <IceFormBinder triggerType="onBlur" name="type">
              <Select className={{ width: '200px' }}>
                <Select.Option value="a1">A1</Select.Option>
                <Select.Option value="a2">A2</Select.Option>
              </Select>
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="type" />
            </div>
          </div>
        </Col>
        <Col l="8">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>监控率：</span>
            <IceFormBinder triggerType="onBlur" name="rate">
              <Input placeholder="请输入" />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="rate" />
            </div>
          </div>
        </Col>
      </Row>
    </IceFormBinderWrapper>
  );
}
