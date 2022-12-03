import React, { useState } from 'react';
import { history, useAuth } from 'ice';
import { Message } from '@alifd/next';
import styles from './index.module.css';
import type { LoginParams, LoginResult } from '@/interfaces/user';
import { login, fetchUserInfo } from '@/services/user';
import store from '@/store';
import logo from '@/assets/logo.png';

// const LoginMessage: React.FC<{
//   content: string;
// }> = ({ content }) => {
//   return (
//     <Alert
//       style={{
//         marginBottom: 24,
//       }}
//       message={content}
//       type="error"
//       showIcon
//     />
//   );
// };

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
        Message.success('登录成功！');
        setAuth({
          admin: result.userType === 'admin',
          user: result.userType === 'user',
        });
        await updateUserInfo();
        const urlParams = new URL(window.location.href).searchParams;
        history?.push(urlParams.get('redirect') || '/dashboard');
        return;
      }
      console.log(result);
      // 如果失败去设置用户错误信息，显示提示信息
      setLoginResult(result);
    } catch (error) {
      Message.error('登录失败，请重试！');
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      Login
    </div>
  );
};

export const getConfig = () => {
  return {
    title: '登录',
  };
};

export default Login;
