import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Grid, Input, Button, Message, Select } from '@alifd/next';
import {
  FormBinderWrapper,
  FormBinder,
  FormError,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const Toast = Message;

export default function SimpleFluencyForm() {
  const [formValue] = useState({
    name: '',
    shortName: '',
  });

  const formChange = (value) => {
    console.log(value);
  };

  let formRef;
  const handleSubmit = () => {
    formRef.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }

      console.log('values:', values);
      Toast.success('提交成功');
    });
  };

  return (
    <IceContainer className={styles.form}>
      <FormBinderWrapper
        ref={(form) => {
          formRef = form;
        }}
        value={formValue}
        onChange={formChange}
      >
        <div className={styles.formContent}>
          <h2 className={styles.formTitle}>添加成员</h2>
          <Row className={styles.formRow}>
            <Col l="2" className={styles.formLabel}>
              <span>姓名：</span>
            </Col>
            <Col l="5">
              <FormBinder name="name" required message="必填项">
                <Input
                  size="large"
                  placeholder="淘小宝"
                  style={{ width: '300px' }}
                />
              </FormBinder>
              <div className={styles.formErrorWrapper}>
                <FormError name="name" />
              </div>
            </Col>
          </Row>

          <Row className={styles.formRow}>
            <Col l="2" className={styles.formLabel}>
              <span>邮箱：</span>
            </Col>
            <Col l="5">
              <FormBinder
                type="email"
                name="email"
                required
                message="请输入正确的邮箱"
              >
                <Input
                  size="large"
                  maxLength={20}
                  placeholder="邮箱"
                  style={{ width: '300px' }}
                />
              </FormBinder>
              <div className={styles.formErrorWrapper}>
                <FormError name="email" />
              </div>
            </Col>
          </Row>

          <Row className={styles.formRow}>
            <Col l="2" className={styles.formLabel}>
              <span>角色：</span>
            </Col>
            <Col l="5">
              <FormBinder name="role">
                <Select size="large" style={{ width: '300px' }}>
                  <Select.Option value="member">Member</Select.Option>
                  <Select.Option value="owner">Owner</Select.Option>
                </Select>
              </FormBinder>
              <div className={styles.formErrorWrapper}>
                <FormError name="role" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col offset="2">
              <Button onClick={handleSubmit} type="primary" size="large">
                  确认
              </Button>
            </Col>
          </Row>
        </div>
      </FormBinderWrapper>
    </IceContainer>
  );
}
