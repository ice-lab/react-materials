import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Grid, Button, Message } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const Toast = Message;

export default function ChangePasswordForm() {
  const [value, setValue] = useState({
    passwd: '',
    rePasswd: '',
  });

  let formRef;
  const checkPasswd = (rule, values, callback) => {
    if (!values) {
      callback('请输入新密码');
    } else if (values.length < 8) {
      callback('密码必须大于8位');
    } else if (values.length > 16) {
      callback('密码必须小于16位');
    } else {
      callback();
    }
  };

  const checkPasswd2 = (rule, values, callback, stateValues) => {
    if (values && values !== stateValues.passwd) {
      callback('两次输入密码不一致');
    } else {
      callback();
    }
  };

  const formChange = formValue => setValue(formValue);

  const validateAllFormField = () => {
    formRef.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }

      console.log('values:', values);
      Toast.success('修改成功');
    });
  };

  return (
    <div className={styles.changePasswordForm}>
      <IceContainer>
        <IceFormBinderWrapper
          value={value}
          onChange={formChange}
          ref={(form) => {
            formRef = form;
          }}
        >
          <div className={styles.formContent}>
            <h2 className={styles.formTitle}>修改密码</h2>

            <Row className={styles.formItem}>
              <Col xxs="6" s="4" l="3" className={styles.formLabel}>
                新密码：
              </Col>
              <Col xxs="16" s="10" l="6">
                <IceFormBinder
                  name="passwd"
                  required
                  validator={checkPasswd}
                >
                  <Input
                    htmlType="password"
                    placeholder="请重新输入新密码"
                  />
                </IceFormBinder>
                <IceFormError name="passwd" />
              </Col>
            </Row>

            <Row className={styles.formItem}>
              <Col xxs="6" s="4" l="3" className={styles.formLabel}>
                确认密码：
              </Col>
              <Col xxs="16" s="10" l="6">
                <IceFormBinder
                  name="rePasswd"
                  required
                  validator={(rule, values, callback) => checkPasswd2(
                    rule,
                    values,
                    callback,
                    value
                  )
                  }
                >
                  <Input
                    htmlType="password"
                    placeholder="两次输入密码保持一致"
                  />
                </IceFormBinder>
                <IceFormError name="rePasswd" />
              </Col>
            </Row>
          </div>
        </IceFormBinderWrapper>

        <Row style={{ marginTop: 20 }}>
          <Col offset="3">
            <Button
              type="primary"
              onClick={validateAllFormField}
            >
              提 交
            </Button>
          </Col>
        </Row>
      </IceContainer>
    </div>
  );
}
