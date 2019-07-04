import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Input, Button, Checkbox, Message } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import IceIcon from '@icedesign/foundation-symbol';
import styles from './index.module.scss';

const UserLogin = (props) => {
  const [value, setValue] = useState({
    username: '',
    password: '',
    checkbox: false,
  });

  const formChange = (v) => {
    setValue(v);
  };

  let formRef;
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
    <div className={styles.container}>
      <h4 className={styles.title}>登 录</h4>
      <IceFormBinderWrapper
        value={value}
        onChange={formChange}
        ref={form => formRef = form}
      >
        <div className={styles.formItems}>
          <div className={styles.formItem}>
            <IceIcon type="person" size="small" className={styles.inputIcon} />
            <IceFormBinder name="username" required message="必填">
              <Input
                size="large"
                maxLength={20}
                placeholder="用户名"
                className={styles.inputCol}
              />
            </IceFormBinder>
            <IceFormError name="username" />
          </div>

          <div className={styles.formItem}>
            <IceIcon type="lock" size="small" className={styles.inputIcon} />
            <IceFormBinder name="password" required message="必填">
              <Input
                size="large"
                htmlType="password"
                placeholder="密码"
                className={styles.inputCol}
              />
            </IceFormBinder>
            <IceFormError name="password" />
          </div>

          <div className={styles.formItem}>
            <IceFormBinder name="checkbox">
              <Checkbox className={styles.checkbox}>记住账号</Checkbox>
            </IceFormBinder>
          </div>

          <div className={styles.footer}>
            <Button
              type="primary"
              size="large"
              onClick={handleSubmit}
              className={styles.submitBtn}
            >
                登 录
            </Button>
            <Link to="/user/register" className={styles.tips}>
                立即注册
            </Link>
          </div>
        </div>
      </IceFormBinderWrapper>
    </div>
  );
};


export default withRouter(UserLogin);
