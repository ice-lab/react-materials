/* eslint react/no-string-refs:0 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FoundationSymbol from '@icedesign/foundation-symbol';
import { Input, Checkbox, Grid, Form, Message } from '@alifd/next';
import { setAuthority } from '@/utils/authority';
import { reloadAuthorized } from '@/utils/Authorized';
import request from '@/utils/request';
import { userLogin } from '@/dataSourceConfig';

const Icon = FoundationSymbol;
const { Row } = Grid;
const FormItem = Form.Item;

function UserLogin(props) {
  const [value, setValue] = useState({
    username: '',
    password: '',
    checkbox: false,
  });

  function formChange(value) {
    setValue(value);
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
      const { data } = await request({
        ...userLogin,
        data: {
          ...userLogin.data,
          ...params
        }
      });
      Message.success('登录成功');
      setAuthority(data.currentAuthority);
      reloadAuthorized();
      props.history.push('/');
    } catch (err) {
    }
  }

  return (
    <div className="user-login">
      <div className="formContainer">
        <Form value={value} onChange={formChange}>
          <FormItem required requiredMessage="必填" className="formItem">
            <Input
              innerBefore={
                <Icon type="person" size="small" className="inputIcon" />
              }
              name="username"
              maxLength={20}
              placeholder="用户名"
            />
          </FormItem>
          <FormItem required requiredMessage="必填" className="formItem">
            <Input
              innerBefore={
                <Icon type="lock" size="small" className="inputIcon" />
              }
              name="password"
              htmlType="password"
              placeholder="密码"
            />
          </FormItem>
          <FormItem>
            <Checkbox name="checkbox" className="checkbox">
              记住账号
            </Checkbox>
          </FormItem>
          <Row className="formItem">
            <Form.Submit
              type="primary"
              validate
              onClick={handleSubmit}
              className="submitBtn"
            >
              登 录
            </Form.Submit>
            <p className="account">
              <span className="tips-text" style={{ marginRight: '20px' }}>
                管理员登录：admin/admin
              </span>
              <span className="tips-text">用户登录：user/user</span>
            </p>
          </Row>

          <Row className="tips">
            <Link to="/user/register" className="tips-text">
              立即注册
            </Link>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default UserLogin;
