---
title: 基础校验
order: 3
---

校验规则可以写在 `Form` 属性上或者 `Field` 属性上

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';
import { Button, Input } from '@alifd/next';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

class App extends Component {
  async onSubmit(values) {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

  render() {
    return (
      <div>
        <Form
          onSubmit={this.onSubmit}
          rules={{
            username: [{
              required: true,
              min: 5,
              message: '姓名至少5个字符'
            }]
          }}
        >
          <h2>个人资料</h2>
          <Field label="姓名：" name="username" component={Input} placeholder="请输入名字" placeholder="请输入名字"/>
          <Field label="年龄：" name="age" component={Input} htmlType="number" placeholder="请输入年龄" rules={[{
            message: '年龄必填且大于18岁',
            required: true,
            validator: (rule, value) => value > 18
          }]} />
          <Field label="简介：" name="intro" component={Input.TextArea} placeholder="请简单介绍一下自己的工作经历" />
          <Field label="">
            <Button htmlType="submit">Submit</Button>
          </Field>
        </Form>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
