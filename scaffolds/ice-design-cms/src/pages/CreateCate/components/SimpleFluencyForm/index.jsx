import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Grid, Input, Button, Message } from '@alifd/next';
import {
  FormBinderWrapper,
  FormBinder,
  FormError,
} from '@icedesign/form-binder';
import cx from 'classnames';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const Toast = Message;

export default function SimpleFluencyForm() {
  let formRef;

  const [formValue, setFormValue] = useState({
    name: '',
    shortName: '',
  });

  const formChange = newValue => setFormValue(newValue);

  const handleSubmit = () => {
    formRef.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }

      console.log('values:', values);
      Toast.success('添加成功');
    });
  };

  return (
    <div className={cx('simple-fluency-form', styles.simpleFluencyForm)}>
      <IceContainer className={styles.form}>
        <FormBinderWrapper
          ref={(form) => {
            formRef = form;
          }}
          value={formValue}
          onChange={formChange}
        >
          <div className={styles.formContent}>
            <h2 className={styles.formTitle}>添加分类</h2>
            <Row className={styles.formRow}>
              <Col xxs="6" s="4" l="3" className={styles.formLabel}>
                <span>分类名称：</span>
              </Col>
              <Col xxs="16" s="10" l="6">
                <FormBinder name="name" required message="必填项">
                  <Input />
                </FormBinder>
                <div className={styles.formErrorWrapper}>
                  <FormError name="name" />
                </div>
              </Col>
            </Row>
            <Row className={styles.formRow}>
              <Col xxs="6" s="4" l="3" className={styles.formLabel}>
                <span>缩略名称：</span>
              </Col>
              <Col xxs="16" s="10" l="6">
                <FormBinder name="shortName" required message="必填项">
                  <Input />
                </FormBinder>
                <div className={styles.formErrorWrapper}>
                  <FormError name="shortName" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col offset="3">
                <Button
                  onClick={handleSubmit}
                  type="primary"
                >
                  确认
                </Button>
              </Col>
            </Row>
          </div>
        </FormBinderWrapper>
      </IceContainer>
    </div>
  );
}
