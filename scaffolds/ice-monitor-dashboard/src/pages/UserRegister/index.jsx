import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Input, Message, Icon, Form } from '@alifd/next';

import styles from './index.module.scss';

const FormItem = Form.Item;

const UserRegister = withRouter((props) => {
  const [value, setValue] = useState({
    name: '',
    email: '',
    passwd: '',
    rePasswd: '',
  });


  function checkPasswd(rule, values, callback, stateValues) {
    if (!values) {
      callback('请输入正确的密码');
    } else if (values && values !== stateValues.passwd) {
      callback('两次输入密码不一致');
    } else {
      callback();
    }
  }
  function handleFormChange(formValue) {
    setValue(formValue);
  }
  function handleSubmit(values, errors) {
    if (errors) {
      console.log('errors', errors);
      return;
    }
    console.log(values);
    Message.success('注册成功');
    props.history.push('/account/login');
  }

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>注 册</h4>
      <Form
        value={value}
        onChange={handleFormChange}
        size="large"
      >
        <FormItem required requiredMessage="请输入正确的用户名">
          <Input
            innerBefore={(
              <Icon
                type="account"
                size="small"
                className={styles.inputIcon}
              />
)}
            name="name"
            size="large"
            maxLength={20}
            placeholder="用户名"
          />
        </FormItem>
        <FormItem required requiredMessage="请输入正确的邮箱">
          <Input
            innerBefore={(
              <Icon
                type="email"
                size="small"
                className={styles.inputIcon}
              />
)}
            name="email"
            size="large"
            maxLength={20}
            placeholder="邮箱"
          />
        </FormItem>
        <FormItem required requiredMessage="请输入正确的邮箱">
          <Input
            innerBefore={(
              <Icon
                type="ellipsis"
                size="small"
                todo="lock"
                className={styles.inputIcon}
              />
)}
            name="passwd"
            htmlType="password"
            size="large"
            placeholder="至少8位密码"
          />
        </FormItem>

        <FormItem required
          validator={(rule, values, callback) => checkPasswd(
            rule,
            values,
            callback,
            value
          )
            }
        >
          <Input
            innerBefore={(
              <Icon
                type="ellipsis"
                size="small"
                todo="lock"
                className={styles.inputIcon}
              />
)}
            name="rePasswd"
            htmlType="password"
            size="large"
            placeholder="至少8位密码"
          />
        </FormItem>
        <div>
          <Form.Submit
            type="primary"
            validate
            onClick={handleSubmit}
            className="submitBtn"
          >
              注 册
          </Form.Submit>

          <Link to="/account/login" className={styles.login}>
              使用已有账户登录
          </Link>
        </div>
      </Form>
    </div>
  );
});

export default UserRegister;
