import React from 'react';
import { Grid, DatePicker, Select } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Filter({ onChange }) {
  const formChange = (value) => {
    onChange(value);
  };

  return (
    <IceFormBinderWrapper
      onChange={formChange}
    >
      <Row wrap gutter="20" className={styles.formRow}>
        <Col l="24">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>注册时间：</span>
            <IceFormBinder triggerType="onBlur" name="regdate">
              <DatePicker placeholder="请输入" style={{ width: '200px' }} />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="regdate" />
            </div>
          </div>
        </Col>
        <Col l="24">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>生日时间：</span>
            <IceFormBinder triggerType="onBlur" name="birthday">
              <DatePicker placeholder="请输入" style={{ width: '200px' }} />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="birthday" />
            </div>
          </div>
        </Col>
        <Col l="24">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>归属门店：</span>
            <IceFormBinder triggerType="onBlur" name="state">
              <Select style={{ width: '200px' }}>
                <Select.Option value="1">余杭盒马店</Select.Option>
                <Select.Option value="2">滨江盒马店</Select.Option>
                <Select.Option value="3">西湖盒马店</Select.Option>
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
