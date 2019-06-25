---
title: 基础联动
order: 5
---

基础联动

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';
import { Button, Input, Radio } from '@alifd/next';

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
            }],
            age: [{
              required: true,
              message: '大于18岁',
              validator: (rule, value) => value > 18
            }]
          }}
          effects={[
            {
              field: 'username',
              handler: formCore => {
                const name = formCore.getFieldValue('username');
                if (name === 'Khaleesi') {
                  formCore.setFieldValue('age', 28)
                }
              }
            },
            {
              field: 'gender',
              handler: formCore => {
                const gender = formCore.getFieldValue('gender');
                if (gender === 'female') {
                  formCore.setFieldProps('age', {
                    visible: false,
                  });
                } else {
                  formCore.setFieldProps('age', {
                    visible: true,
                  });
                }
              }
            }
          ]}
        >
          <h2>个人资料</h2>
          <Field label="姓名：" name="username" component={Input} placeholder="请输入名字" />
          <Field label="性别：" name="gender" component={Radio.Group}>
            <Radio value="male">男</Radio>
            <Radio value="female">女</Radio>
            <Radio value="x">X</Radio>
          </Field>
          <Field label="年龄：" name="age" component={Input} htmlType="number" placeholder="请输入年龄" />
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
