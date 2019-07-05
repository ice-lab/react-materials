import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Input, Button, Checkbox, Grid, Message } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import IceIcon from '@icedesign/foundation-symbol';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const UserLogin = (props) => {
  const [value, setValue] = useState({
    username: '',
    password: '',
    checkbox: false,
  });

  let formRef;

  const formChange = (newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formRef.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
      console.log(values);
      Message.success('登录成功');
      props.history.push('/');
    });
  };

  return (
    <div className={styles.formContainer}>
      <h4 className={styles.formTitle}>登 录</h4>
      <IceFormBinderWrapper
        value={value}
        onChange={formChange}
        ref={form => formRef = form}
      >
        <div className={styles.formItems}>
          <Row className={styles.formItem}>
            <Col className={styles.formItemCol}>
              <IceIcon type="person" size="small" className={styles.inputIcon} />
              <IceFormBinder name="username" required message="必填">
                <Input className="next-input-single" size="large" maxLength={20} placeholder="用户名" />
              </IceFormBinder>
            </Col>
            <Col>
              <IceFormError name="username" />
            </Col>
          </Row>

          <Row className={styles.formItem}>
            <Col className={styles.formItemCol}>
              <IceIcon type="lock" size="small" className={styles.inputIcon} />
              <IceFormBinder name="password" required message="必填">
                <Input className="next-input-single" size="large" htmlType="password" placeholder="密码" />
              </IceFormBinder>
            </Col>
            <Col>
              <IceFormError name="password" />
            </Col>
          </Row>

          <Row className={styles.formItem}>
            <Col>
              <IceFormBinder name="checkbox">
                <Checkbox className="checkbox">记住账号</Checkbox>
              </IceFormBinder>
            </Col>
          </Row>

          <Row className={styles.formItem}>
            <Button
              type="primary"
              onClick={handleSubmit}
              className="submitBtn"
            >
              登 录
            </Button>
            <p className="account">
              <span className={styles.tipsText} style={{ marginRight: '20px' }}>
                管理员登录：admin/admin
              </span>
              <span className={styles.tipsText}>用户登录：user/user</span>
            </p>
          </Row>

          <Row className={styles.tips}>
            <Link to="/user/register" className={styles.tipsText}>
              立即注册
            </Link>
          </Row>
        </div>
      </IceFormBinderWrapper>
    </div>
  );
};

export default withRouter(UserLogin);
