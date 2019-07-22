import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Input, Grid, Form, Message } from '@alifd/next';
import FoundationSymbol from '@icedesign/foundation-symbol';
import { useRequest } from '@/utils/request';
import { userRegister } from '@/config/dataSource';
import styles from './index.module.scss';

const Icon = FoundationSymbol;
const { Row } = Grid;
const FormItem = Form.Item;

function checkPasswd2(rule, values, callback, stateValues) {
  if (!values) {
    callback('请输入正确的密码');
  } else if (values && values !== stateValues.passwd) {
    callback('两次输入密码不一致');
  } else {
    callback();
  }
}

const UserRegister = withRouter((props) => {
  const { loading, request } = useRequest(userRegister);
  const [value, setValue] = useState({
    name: '',
    email: '',
    passwd: '',
    rePasswd: '',
  });

  function formChange(val) {
    setValue(val);
  }

  async function handleRegister(params) {
    try {
      await request({
        data: params,
      });
      Message.success('注册成功');
      props.history.push('/user/login');
    } catch (err) {
      console.error(err);
    }
  }

  function handleSubmit(values, errors) {
    if (errors) {
      console.log('errors', errors);
      return;
    }
    handleRegister(values);
  }

  return (
    <div className={styles.userRegister}>
      <div className={styles.formContainer}>
        <Form value={value} onChange={formChange}>
          <FormItem
            required
            requiredMessage="请输入正确的用户名"
            className={styles.formItem}
          >
            <Input
              innerBefore={
                <Icon type="person" size="small" className={styles.inputIcon} />
              }
              name="name"
              maxLength={20}
              placeholder="用户名"
            />
          </FormItem>
          <FormItem
            required
            requiredMessage="请输入正确的邮箱"
            className={styles.formItem}
          >
            <Input
              innerBefore={
                <Icon type="mail" size="small" className={styles.inputIcon} />
              }
              name="email"
              maxLength={20}
              placeholder="邮箱"
            />
          </FormItem>
          <FormItem
            required
            requiredMessage="请输入正确的密码"
            className={styles.formItem}
          >
            <Input
              innerBefore={
                <Icon
                  type="lock"
                  size="small"
                  todo="lock"
                  className={styles.inputIcon}
                />
              }
              name="passwd"
              htmlType="password"
              placeholder="至少8位密码"
            />
          </FormItem>

          <FormItem
            required
            validator={(rule, values, callback) =>
              checkPasswd2(rule, values, callback, value)
            }
            className={styles.formItem}
          >
            <Input
              innerBefore={
                <Icon
                  type="lock"
                  size="small"
                  todo="lock"
                  className={styles.inputIcon}
                />
              }
              name="rePasswd"
              htmlType="password"
              placeholder="至少8位密码"
            />
          </FormItem>
          <Row className={styles.formItem}>
            <Form.Submit
              type="primary"
              validate
              disabled={loading}
              onClick={handleSubmit}
              className={styles.submitBtn}
            >
              {loading ? '注册中...' : '注 册'}
            </Form.Submit>
          </Row>

          <Row className={styles.tips}>
            <Link to="/user/login" className={styles.tipsText}>
              使用已有账户登录
            </Link>
          </Row>
        </Form>
      </div>
    </div>
  );
});

export default UserRegister;
