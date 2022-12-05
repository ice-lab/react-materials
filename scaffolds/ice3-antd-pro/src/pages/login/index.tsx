import React, { useState } from 'react';
import { definePageConfig, history, useAuth } from 'ice';
import { message, Alert } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { ProFormCheckbox, ProFormText, LoginForm } from '@ant-design/pro-form';
import styles from './index.module.css';
import type { LoginParams, LoginResult } from '@/interfaces/user';
import { login, fetchUserInfo } from '@/services/user';
import store from '@/store';
import logo from '@/assets/logo.png';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};

const Login: React.FC = () => {
  const [loginResult, setLoginResult] = useState<LoginResult>({});
  const [, userDispatcher] = store.useModel('user');
  const [, setAuth] = useAuth();

  async function updateUserInfo() {
    const userInfo = await fetchUserInfo();
    userDispatcher.updateCurrentUser(userInfo);
  }

  async function handleSubmit(values: LoginParams) {
    try {
      const result = await login(values);
      if (result.success) {
        message.success('登录成功！');
        setAuth({
          admin: result.userType === 'admin',
          user: result.userType === 'user',
        });
        await updateUserInfo();
        const urlParams = new URL(window.location.href).searchParams;
        history?.push(urlParams.get('redirect') || '/');
        return;
      }
      console.log(result);
      // 如果失败去设置用户错误信息，显示提示信息
      setLoginResult(result);
    } catch (error) {
      message.error('登录失败，请重试！');
      console.log(error);
    }
  }
  return (
    <div className={styles.container}>
      <LoginForm
        title="ICE Pro"
        logo={<img alt="logo" src={logo} />}
        subTitle="基于 ice.js 3 开箱即用的中后台模板"
        onFinish={async (values) => {
          await handleSubmit(values as LoginParams);
        }}
      >
        {loginResult.success === false && (
          <LoginMessage
            content="账户或密码错误(admin/ice)"
          />
        )}
        <ProFormText
          name="username"
          fieldProps={{
            size: 'large',
            prefix: <UserOutlined className={'prefixIcon'} />,
          }}
          placeholder={'用户名: admin or user'}
          rules={[
            {
              required: true,
              message: '请输入用户名!',
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined className={'prefixIcon'} />,
          }}
          placeholder={'密码: ice'}
          rules={[
            {
              required: true,
              message: '请输入密码！',
            },
          ]}
        />
        <div
          style={{
            marginBottom: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}
          >
            忘记密码
          </a>
        </div>
      </LoginForm>
    </div>
  );
};

export const pageConfig = definePageConfig(() => {
  return {
    title: '登录',
  };
});

export default Login;
