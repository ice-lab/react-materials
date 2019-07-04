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
        <Col l="8">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>时间筛选：</span>
            <IceFormBinder triggerType="onBlur" name="time">
              <DatePicker placeholder="请输入" />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="time" />
            </div>
          </div>
        </Col>
        <Col l="8">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>时间区间：</span>
            <IceFormBinder triggerType="onBlur" name="timeInterval">
              <Select style={{ width: '200px' }}>
                <Select.Option value="1">近3个月</Select.Option>
                <Select.Option value="2">近半年</Select.Option>
                <Select.Option value="3">近一年</Select.Option>
              </Select>
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="timeInterval" />
            </div>
          </div>
        </Col>
        <Col l="8">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>状态：</span>
            <IceFormBinder triggerType="onBlur" name="state">
              <Select style={{ width: '200px' }}>
                <Select.Option value="1">提现中</Select.Option>
                <Select.Option value="2">提现完成</Select.Option>
                <Select.Option value="3">提现失败</Select.Option>
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
