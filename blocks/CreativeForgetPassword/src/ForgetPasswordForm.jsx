import React from 'react';
import { Message } from '@alifd/next';
import AuthForm from './AuthForm';

export default function ForgetPasswordForm() {

  const formChange = (value) => {
    console.log('formChange:', value);
  };

  const handleSubmit = (errors, values) => {
    if (errors) {
      console.log('errors', errors);
      return;
    }
    console.log('values:', values);
    Message.success('请查看邮件重设密码');
    // 成功后做对应的逻辑处理
  };

  const config = [
    {
      label: '用户名',
      component: 'Input',
      componentProps: {
        placeholder: '用户名',
        size: 'large',
        maxLength: 20,
      },
      formBinderProps: {
        name: 'name',
        required: true,
        message: '必填',
      },
    },
    {
      label: '邮箱',
      component: 'Input',
      componentProps: {
        placeholder: '邮箱',
        size: 'large',
        maxLength: 20,
      },
      formBinderProps: {
        name: 'email',
        required: true,
        message: '请输入正确的邮箱',
      },
    },
    {
      label: '找回密码',
      component: 'Button',
      componentProps: {
        type: 'primary',
      },
      formBinderProps: {},
    },
  ];

  const initFields = {
    name: '',
    email: '',
  };

  const links = [
    { to: '/', text: '重新登录' },
    { to: '/register', text: '重新注册' },
  ];

  return (
    <div className="user-forget-password">
      <AuthForm
        title="忘记密码"
        config={config}
        initFields={initFields}
        links={links}
        formChange={formChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
