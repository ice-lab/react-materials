import React, { useState, useRef } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Button, Grid } from '@alifd/next';
import {
  FormBinderWrapper,
  FormBinder,
  FormError,
} from '@icedesign/form-binder';

import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Subscribe() {
  const formRef = useRef(null);
  const [formValue, setFormValue] = useState({
    email: '',
  });

  const formChange = (newValue) => {
    setFormValue(newValue);
  };

  const subscribe = () => {
    formRef.current.validateAll((errors, values) => {
      console.log('errors', errors, 'values', values);
    });
  };

  return (
    <IceContainer>
      <FormBinderWrapper
        ref={formRef}
        value={formValue}
        onChange={formChange}
      >
        <Row wrap>
          <Col xxs="1" s="6" l="8" />
          <Col xxs="16" s="8" l="6">
            <Row wrap>
              <Col span="24">
                <FormBinder
                  name="email"
                  type="email"
                  message="邮箱不合法"
                  required
                >
                  <Input
                    size="large"
                    placeholder="请输入您的订阅邮箱..."
                    className={styles.readEmail }
                  />
                </FormBinder>
              </Col>
              <Col span="24" className={styles.error}>
                <FormError name="email" />
              </Col>
            </Row>
          </Col>
          <Col xxs="6" s="4" l="2" className={styles.textAlign}>
            <Button size="large" type="primary" onClick={subscribe}>
              订阅
            </Button>
          </Col>
        </Row>
      </FormBinderWrapper>
    </IceContainer>
  );
}
