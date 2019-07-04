import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FoundationSymbol from '@icedesign/foundation-symbol';
import { Input, Checkbox, Grid, Form, Message } from '@alifd/next';
import stores from '@/stores/index';
import styles from './index.module.scss';

const Icon = FoundationSymbol;
const { Row } = Grid;
const FormItem = Form.Item;

function UserLogin(props) {
  const userProfile = stores.useStore('userProfile');

  const [value, setValue] = useState({
    username: '',
    password: '',
    checkbox: false,
  });

  function formChange(formValue) {
    setValue(formValue);
  }

  function handleSubmit(values, errors) {
    if (errors) {
      console.log('errors', errors);
      return;
    }
    handleLogin(values);
  }

  async function handleLogin(params) {
    try {
      userProfile.login(params, () => {
        Message.success('登录成功');
        props.history.push('/');
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.userLogin}>
      <div className={styles.formContainer}>
        <Form value={value} onChange={formChange}>
          <FormItem required requiredMessage="必填" className={styles.formItem}>
            <Input
              innerBefore={
                <Icon type="person" size="small" className={styles.inputIcon} />
              }
              name="username"
              maxLength={20}
              placeholder="用户名"
            />
          </FormItem>
          <FormItem required requiredMessage="必填" className={styles.formItem}>
            <Input
              innerBefore={
                <Icon type="lock" size="small" className={styles.inputIcon} />
              }
              name="password"
              htmlType="password"
              placeholder="密码"
            />
          </FormItem>
          <FormItem>
            <Checkbox name="checkbox" className={styles.checkbox}>
              记住账号
            </Checkbox>
          </FormItem>
          <Row className={styles.formItem}>
            <Form.Submit
              type="primary"
              validate
              onClick={handleSubmit}
              className={styles.submitBtn}
            >
              登 录
            </Form.Submit>
            <p className={styles.account}>
              <span className={styles.tipsText} style={{ marginRight: '20px' }}>
                管理员登录：admin/admin
              </span>
              <span className={styles.tipsText}>用户登录：user/user</span>
            </p>
          </Row>

          <Row className="tips">
            <Link to="/user/register" className={styles.tipsText}>
              立即注册
            </Link>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default UserLogin;
