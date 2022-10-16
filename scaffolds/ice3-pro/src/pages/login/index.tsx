import React, { useState } from 'react';
import { history, useAuth } from 'ice';
import { message, Alert } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import styles from './index.module.css';
import type { LoginParams, LoginResult } from '@/interfaces/user';
import { login, fetchUserInfo } from '@/services/user';
import store from '@/store';
import { setCookie } from '@/utils/cookie';

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
  const [, useDispatcher] = store.useModel('user');
  const [auth, setAuth] = useAuth();

  async function getUserInfo(userType: LoginResult['userType']) {
    const userInfo = await fetchUserInfo(userType);
    useDispatcher.updateUserInfo(userInfo);
  }

  async function handleSubmit(values: LoginParams) {
    try {
      const result = await login(values);
      if (result.success) {
        message.success('登录成功！');
        setCookie('ice_userType', result.userType!, { path: '/', 'max-age': 60 * 60 * 24 * 365 });
        setAuth({
          admin: result.userType === 'admin',
          user: result.userType === 'user',
        });

        await getUserInfo(result.userType);
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
        title="ice.js"
        subTitle="基于 React 的应用研发框架，开箱即用，同时支持移动端和桌面端"
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
      </LoginForm>
    </div>
  )
}

export const getConfig = () => {
  return {
    title: '登录 | ice.js'
  }
}

export default Login;
