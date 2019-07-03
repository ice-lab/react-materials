import React from 'react';
import { DatePicker, Button } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

const { RangePicker } = DatePicker;

export default function Filter({ onChange }) {
  const formChange = (value) => {
    onChange(value);
  };

  const buttonChange = () => {
    onChange();
  };

  return (
    <IceFormBinderWrapper
      onChange={formChange}
    >
      <div className={styles.formContent}>
        <div className={styles.formItem}>
          <span className={styles.formLabel}>到店时间：</span>
          <IceFormBinder triggerType="onBlur" name="reserveTime">
            <RangePicker placeholder="请输入" style={{ width: '240px' }} />
          </IceFormBinder>
          <div className={styles.formError}>
            <IceFormError name="reserveTime" />
          </div>
        </div>
        <div className={styles.formItem}>
          {['今天', '明天', '本周'].map((item, index) => {
            return (
              <Button
                type="normal"
                style={{ marginLeft: '20px' }}
                key={index}
                onClick={buttonChange}
              >
                {item}
              </Button>
            );
          })}
        </div>
      </div>
    </IceFormBinderWrapper>
  );
}
