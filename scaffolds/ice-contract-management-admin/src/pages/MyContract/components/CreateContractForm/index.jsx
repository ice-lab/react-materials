import React, { useState } from 'react';
import {
  Input,
  Button,
  Select,
} from '@alifd/next';
import {
  FormBinderWrapper, FormBinder, FormError,
} from '@icedesign/form-binder';

import styles from './index.module.scss';

const formRef = React.createRef();

export default function CreateFrom(props) {
  const [formValue, setFormValue] = useState({});
  const [submitting, setSubmitting] = useState(false);

  function onCancel() {
    props.onSubmitCancel();
  }

  function onSubmit() {
    if (submitting) {
      return;
    }

    setSubmitting(true);
    formRef.current.validateFields((errors, values) => {
      if (!errors) {
        console.log('submit', values);
        setTimeout(async () => {
          await setSubmitting(false);
          props.onSubmitSuccess(values);
        }, 1 * 1000);
      } else {
        setSubmitting(false);
      }
    });
  }

  return (
    <FormBinderWrapper
      ref={formRef}
      value={formValue}
      onChange={(value) => {
        setFormValue(value);
      }}
    >
      <div className={styles.formContainer}>
        <div className={styles.formItem}>
          <label htmlFor="id" className={styles.formLabel}>
            编号：
            <span
              style={{
                color: 'red',
              }}
            >
              *
            </span>
          </label>
          <FormBinder name="id" required message="请选择编号">
            <Select
              id="id"
              dataSource={[
                { label: '123', value: '123' },
                { label: '456', value: '456' },
                { label: '789', value: '789' },
              ]}
            />
          </FormBinder>
          <FormError name="id" />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="name" className={styles.formLabel}>合同名称：</label>
          <FormBinder name="name">
            <Input id="name" placeholder="请输入合同名称" />
          </FormBinder>
          <FormError name="name" />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="ourCompany" className={styles.formLabel}>我方公司：</label>
          <FormBinder name="ourCompany">
            <Input id="ourCompany" placeholder="请输入" />
          </FormBinder>
          <FormError name="ourCompany" />
        </div>

        <div className={styles.formActions}>
          <Button onClick={onCancel} style={{ marginRight: 10 }}>取消</Button>
          <Button onClick={onSubmit} type="primary" loading={submitting}>提交</Button>
        </div>
      </div>
    </FormBinderWrapper>
  );
}

CreateFrom.defaultProps = {
  onCreateSubmitSuccess: () => {},
  onCreateSubmitCancel: () => {},
};
