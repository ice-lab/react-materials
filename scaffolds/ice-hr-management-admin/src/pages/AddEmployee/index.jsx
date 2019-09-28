import React, { useState, useRef } from 'react';
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

export default function AddEmployee() {
  const [formValue] = useState({
    name: '',
    shortName: '',
  });
  const formEl = useRef(null);

  function formChange(value) {
    console.log(value);
  }

  function handleSubmit() {
    formEl.current.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }

      console.log('values:', values);
      Toast.success('提交成功');
    });
  }

  return (
    <IceContainer className={styles.form}>
      <FormBinderWrapper
        ref={formEl}
        value={formValue}
        onChange={formChange}
      >
        <div className={styles.formContent}>
          <h2 className={styles.formTitle}>添加员工</h2>
          <Row className={styles.formRow}>
            <Col l="2" className={styles.formLabel}>
              <span>姓名：</span>
            </Col>
            <Col l="5">
              <FormBinder name="name" required message="必填项">
                <Input
                  name="name"
                  placeholder="淘小宝"
                  className={styles.inputw}
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
                  maxLength={20}
                  placeholder="邮箱"
                  className={styles.inputw}
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
                <Select className={styles.inputw}>
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
              <Button onClick={handleSubmit} type="primary">
                确认
              </Button>
            </Col>
          </Row>
        </div>
      </FormBinderWrapper>
    </IceContainer>
  );
}
