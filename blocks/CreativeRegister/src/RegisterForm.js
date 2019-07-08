import React, { useState } from 'react';
import { Message } from '@alifd/next';
import AuthForm from './AuthForm';

export default function RegisterForm() {
  const [value, setValue] = useState({});

  const checkPasswd = (rule, value, callback) => {
    if (!value) {
      callback('请输入正确的密码');
    } else if (value.length < 8) {
      callback('密码必须大于8位');
    } else if (value.length > 16) {
      callback('密码必须小于16位');
    } else {
      callback();
    }
  };

  const checkPasswd2 = (rule, value, callback, source) => {
    if (!value) {
      callback('请输入正确的密码');
    } else if (value && value.passwd !== source.rePasswd) {
      callback('两次输入密码不一致');
    } else {
      callback();
    }
  };

  const formChange = (value) => {
    console.log('formChange:', value);
    setValue(value);
  };

  const handleSubmit = (errors, values) => {
    if (errors) {
      console.log('errors', errors);
      return;
    }
    console.log('values:', values);
    Message.success('注册成功');
    // 注册成功后做对应的逻辑处理
  };

  console.log(value);
  const config = [
    {
      label: '用户名',
      component: 'Input',
      componentProps: {
        placeholder: '用户名',
        size: 'large',
      },
      formBinderProps: {
        name: 'name',
        required: true,
        message: '请输入正确的用户名',
      },
    },
    {
      label: '邮箱',
      component: 'Input',
      componentProps: {
        placeholder: '邮箱',
        size: 'large',
      },
      formBinderProps: {
        type: 'email',
        name: 'email',
        required: true,
        message: '请输入正确的邮箱',
      },
    },
    {
      label: '密码',
      component: 'Input',
      componentProps: {
        placeholder: '至少8位密码',
        size: 'large',
        htmlType: 'password',
      },
      formBinderProps: {
        name: 'passwd',
        required: true,
        validator(rule, value, callback, source) {
          checkPasswd(rule, value, callback, source);
        },
      },
    },
    {
      label: '确认密码',
      component: 'Input',
      componentProps: {
        placeholder: '确认密码',
        size: 'large',
        htmlType: 'password',
      },
      formBinderProps: {
        name: 'rePasswd',
        required: true,
        validator(rule, value, callback, source) {
          checkPasswd2(rule, value, callback, source);
        },
      },
    },
    {
      label: '注册',
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
    passwd: '',
    rePasswd: '',
  };

  const links = [
    { to: '/', text: '已有账号' },
    { to: '/forgetpassword', text: '找回密码' },
  ];

  return (
    <div className="user-register">
      <AuthForm
        title="注册"
        config={config}
        initFields={initFields}
        links={links}
        formChange={formChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
