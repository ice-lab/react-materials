import React, { useState, useRef } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Input, Button, Message } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import Icon from '@icedesign/foundation-symbol';
import styles from './index.module.scss';


const UserRegister = (props) => {
  const [value, setValue] = useState({
    name: '',
    email: '',
    passwd: '',
    rePasswd: '',
  });

  const form = useRef(null);

  function checkPasswd(rule, values, callback) {
    if (!values) {
      callback('请输入正确的密码');
    } else if (values.length < 8) {
      callback('密码必须大于8位');
    } else if (values.length > 16) {
      callback('密码必须小于16位');
    } else {
      callback();
    }
  }

  function checkPasswd2(rule, values, callback, stateValues) {
    if (!values) {
      callback('请输入正确的密码');
    } else if (values && values !== stateValues.passwd) {
      callback('两次输入密码不一致');
    } else {
      callback();
    }
  }

  function formChange(val) {
    setValue(val);
  }

  function handleSubmit() {
    form.current.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
      console.log(values);
      Message.success('注册成功');
      props.history.push('/user/login');
    });
  }

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>
        注 册
      </h4>
      <IceFormBinderWrapper
        value={value}
        onChange={formChange}
        ref={form}
      >
        <div className={styles.formItems}>
          <div className={styles.formItem}>
            <Icon type="account" size="small" className={styles.inputIcon} />
            <IceFormBinder name="name" required message="请输入正确的用户名">
              <Input placeholder="用户名" className={styles.inputCol} />
            </IceFormBinder>
            <IceFormError name="name" />
          </div>

          <div className={styles.formItem}>
            <Icon type="email" size="small" className={styles.inputIcon} />
            <IceFormBinder
              type="email"
              name="email"
              required
              message="请输入正确的邮箱"
            >
              <Input
                maxLength={20}
                placeholder="邮箱"
                className={styles.inputCol}
              />
            </IceFormBinder>
            <IceFormError name="email" />
          </div>

          <div className={styles.formItem}>
            <Icon type="ellipsis" size="small" className={styles.inputIcon} />
            <IceFormBinder
              name="passwd"
              required
              validator={checkPasswd}
            >
              <Input
                htmlType="password"
                placeholder="至少8位密码"
                className={styles.inputCol}
              />
            </IceFormBinder>
            <IceFormError name="passwd" />
          </div>

          <div className={styles.formItem}>
            <Icon type="ellipsis" size="small" className={styles.inputIcon} />
            <IceFormBinder
              name="rePasswd"
              required
              validator={(rule, values, callback) => checkPasswd2(rule, values, callback, value)}
            >
              <Input
                htmlType="password"
                placeholder="确认密码"
                className={styles.inputCol}
              />
            </IceFormBinder>
            <IceFormError name="rePasswd" />
          </div>

          <div className="footer">
            <Button
              type="primary"
              onClick={handleSubmit}
              className={styles.submitBtn}
            >
              注 册
            </Button>
            <Link to="/user/login" className={styles.tips}>
              使用已有账户登录
            </Link>
          </div>
        </div>
      </IceFormBinderWrapper>
    </div>
  );
};
UserRegister.displayName = 'UserRegister';

export default withRouter(UserRegister);
