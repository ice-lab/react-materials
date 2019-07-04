/* eslint react/no-string-refs:0 */
import React, { useState, useRef } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Input, Button, Checkbox, Message } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import Icon from '@icedesign/foundation-symbol';
import styles from './index.module.scss';


const UserLogin = (props) => {
  const [value, setValue] = useState({
    username: '',
    password: '',
    checkbox: false,
  });

  const form = useRef(null);

  function formChange(val) {
    setValue(val);
  }

  function handleSubmit(e) {
    e.preventDefault();
    form.current.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
      console.log(values);
      Message.success('登录成功');
      props.history.push('/');
    });
  }

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>
        登 录
      </h4>
      <IceFormBinderWrapper
        value={value}
        onChange={formChange}
        ref={form}
      >
        <div className={styles.formItems}>
          <div className={styles.formItem}>
            <Icon type="account" size="small" className={styles.inputIcon} />
            <IceFormBinder name="username" required message="必填">
              <Input
                maxLength={20}
                placeholder="用户名"
                className={styles.inputCol}
              />
            </IceFormBinder>
            <IceFormError name="username" />
          </div>

          <div className={styles.formItem}>
            <Icon type="ellipsis" size="small" className={styles.inputIcon} />
            <IceFormBinder name="password" required message="必填">
              <Input
                htmlType="password"
                placeholder="密码"
                className={styles.inputCol}
              />
            </IceFormBinder>
            <IceFormError name="password" />
          </div>

          <div className={styles.formItem}>
            <IceFormBinder name="checkbox">
              <Checkbox className={styles.checkbox}>
                记住账号
              </Checkbox>
            </IceFormBinder>
          </div>

          <div className={styles.footer}>
            <Button
              type="primary"
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
UserLogin.displayName = 'UserLogin';

export default withRouter(UserLogin);
