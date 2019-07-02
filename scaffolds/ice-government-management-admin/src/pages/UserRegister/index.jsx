/* eslint react/no-string-refs:0 */
import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Input, Button, Grid, Message } from '@alifd/next';
import Icon from '@icedesign/foundation-symbol';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

const { Row, Col } = Grid;

let form;
function UserRegister(props) {
  const [value, setValue] = useState({
    name: '',
    email: '',
    passwd: '',
    rePasswd: '',
  });

  const checkPasswd = (rule, values, callback) => {
    if (!values) {
      callback('请输入正确的密码');
    } else if (values.length < 8) {
      callback('密码必须大于8位');
    } else if (values.length > 16) {
      callback('密码必须小于16位');
    } else {
      callback();
    }
  };

  const checkPasswd2 = (rule, values, callback, stateValues) => {
    if (!values) {
      callback('请输入正确的密码');
    } else if (values && values !== stateValues.passwd) {
      callback('两次输入密码不一致');
    } else {
      callback();
    }
  };

  const formChange = (value) => {
    setValue(value);
  };

  const handleSubmit = () => {
    form.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
      console.log(values);
      Message.success('注册成功');
      props.history.push('/user/login');
    });
  };

  return (
    <div className={styles.userRegister}>
      <div className={styles.formContainer}>
        <h4 className={styles.formTitle}>注 册</h4>
        <IceFormBinderWrapper
          value={value}
          onChange={formChange}
          ref={formRef => form = formRef}
        >
          <div className={styles.formItems}>
            <Row className={styles.formItem}>
              <Col className={styles.formItemCol}>
                <Icon type="person" size="small" className={styles.inputIcon} />

                <IceFormBinder
                  name="name"
                  required
                  message="请输入正确的用户名"
                >
                  <Input className={styles.nextInputSingle} placeholder="用户名" />
                </IceFormBinder>
              </Col>
              <Col>
                <IceFormError name="name" />
              </Col>
            </Row>

            <Row className={styles.formItem}>
              <Col className={styles.formItemCol}>
                <Icon type="mail" size="small" className={styles.inputIcon} />
                <IceFormBinder
                  type="email"
                  name="email"
                  required
                  message="请输入正确的邮箱"
                >
                  <Input
                    className={styles.nextInputSingle}
                    maxLength={20}
                    placeholder="邮箱"
                  />
                </IceFormBinder>
              </Col>
              <Col>
                <IceFormError name="email" />
              </Col>
            </Row>

            <Row className={styles.formItem}>
              <Col className={styles.formItemCol}>
                <Icon type="lock" size="small" className={styles.inputIcon} />
                <IceFormBinder
                  name="passwd"
                  required
                  validator={checkPasswd}
                >
                  <Input
                    className={styles.nextInputSingle}
                    htmlType="password"
                    placeholder="至少8位密码"
                  />
                </IceFormBinder>
              </Col>
              <Col>
                <IceFormError name="passwd" />
              </Col>
            </Row>

            <Row className={styles.formItem}>
              <Col className={styles.formItemCol}>
                <Icon type="lock" size="small" className={styles.inputIcon} />
                <IceFormBinder
                  name="rePasswd"
                  required
                  validator={(rule, values, callback) =>
                    checkPasswd2(
                      rule,
                      values,
                      callback,
                      value
                    )
                  }
                >
                  <Input
                    className={styles.nextInputSingle}
                    htmlType="password"
                    placeholder="确认密码"
                  />
                </IceFormBinder>
              </Col>
              <Col>
                <IceFormError name="rePasswd" />
              </Col>
            </Row>

            <Row className={styles.formItem}>
              <Button
                type="primary"
                onClick={handleSubmit}
                className={styles.submitBtn}
              >
                注 册
              </Button>
            </Row>

            <Row className={styles.tips}>
              <Link to="/user/login" className={styles.tipsText}>
                使用已有账户登录
              </Link>
            </Row>
          </div>
        </IceFormBinderWrapper>
      </div>
    </div>
  );
}

export default withRouter(UserRegister);
