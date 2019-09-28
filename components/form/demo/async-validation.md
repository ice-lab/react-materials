---
title: 异步校验
order: 4
---

异步校验，校验结果的 `message` 直接 `callback` 即可

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
        <Form onSubmit={this.onSubmit}>
          <h2>个人资料</h2>
          <Field name="name" label="名称：" component={Input} autoComplete="off" placeholder="请输入名字" rules={{
              async asyncValidator(rule, value, callback) {
                if (!value) {
                  callback('名称必填');
                } else {
                  await sleep(500);

                  if (~['john', 'paul', 'george', 'ringo'].indexOf(value)) {
                    callback('名称已存在');
                  } else {
                    callback(undefined)
                  }
                }
              }
            }} />
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
