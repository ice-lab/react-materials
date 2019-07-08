import React, { useState } from 'react';
import { Input, Checkbox, Grid, Icon, Form } from '@alifd/next';
import styles from './index.module.scss'

const { Row } = Grid;
const Item = Form.Item;

export default function RegisterForm() {
  const [value, setValue] = useState({
    account: undefined,
    passwd: undefined,
    rePasswd: undefined,
    checkbox: false,
  });

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
    console.log('stateValues:', stateValues);
    if (values && values !== stateValues.passwd) {
      callback('两次输入密码不一致');
    } else {
      callback();
    }
  };

  const formChange = (value) => {
    setValue(value);
  };

  const handleSubmit = (values) => {
    console.log('values', values);
  };

  return (
    <div className={styles.registerform}>
      <div className={styles.formContainer}>
        <h4 className={styles.formTitle}>注册</h4>
        <Form
          value={value}
          onChange={formChange}
          size="large"
        >
          <Item required requiredMessage="必填">
            <Input
              maxLength={20}
              placeholder="会员名/邮箱/手机号"
              name="account"
              innerBefore={
                <Icon type="account" size="small" className={styles.inputIcon}/>
              }
            />
          </Item>

          <Item required validator={checkPasswd}>
            <Input
              name="passwd"
              innerBefore={
                <Icon
                  type="account"
                  test="lock"
                  size="small"
                  className={styles.inputIcon}
                />
              }
              htmlType="password"
              size="large"
              placeholder="请输入密码"
            />
          </Item>

          <Item
            required
            validator={(rule, values, callback) =>
              checkPasswd2(rule, values, callback, value)
            }
          >
            <Input
              name="rePasswd"
              innerBefore={
                <Icon
                  type="account"
                  test="lock"
                  size="small"
                  className={styles.inputIcon}
                />
              }
              htmlType="password"
              size="large"
              placeholder="两次输入密码保持一致"
            />
          </Item>

          <Item>
            <Checkbox name="checkbox">记住账号</Checkbox>
          </Item>

          <Row className={styles.formItem}>
            <Form.Submit
              type="primary"
              onClick={handleSubmit}
              validate
              className={styles.submitBtn}
            >
              注 册
            </Form.Submit>
          </Row>

          <Row className={styles.tips}>
            <a href="/" className={styles.link}>
              立即登录
            </a>
            <span className={styles.line}>|</span>
            <a href="/" className={styles.link}>
              忘记密码
            </a>
          </Row>
        </Form>
      </div>
    </div>
  );
}
