import React from 'react';
import { Form, Field } from '@ice/form';
import { Button, Input } from '@alifd/next';
import styles from './index.module.scss';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default function LoginForm () {
  const onSubmit = async (values) => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        rules={{
          name: [{
            required: true,
            min: 5,
            message: '姓名至少5个字符',
          }],
          password: [{
            required: true,
            min: 6,
            message: '密码至少6位数',
          }],
        }}
        className={styles.form}
      >
        <h2 className={styles.loginTitle}>登录</h2>
        <Field label="" name="name" placeholder="用户名">
          <Input size="large" />
        </Field>
        <Field label="" name="password" htmlType="password" placeholder="密码">
          <Input size="large" />
        </Field>
        <Field label="">
          <div className={styles.submitBtnWrapper}><Button className={styles.submitBtn} type="primary" htmlType="submit">登录</Button></div>
        </Field>
      </Form>
    </div>
  )
}