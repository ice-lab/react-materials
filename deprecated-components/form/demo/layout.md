---
title: 表单布局
order: 16
---

表单布局

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
    const layout = {
      labelCol: 2,
      wrapperCol: 4,
      labelTextAlign: 'left',
      labelAlign: 'top'
    };
    return (
      <div>
        <Form
          layout = {layout}
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
          <Field label="姓名：" name="username" component={Input} placeholder="请输入名字" errorRender={ 
            error => <span style={{color: '#ff7000'}}>{error}</span>
          } />
          <Field label="年龄：" name="age" component={Input} tips="身份证上的年龄" placeholder="请输入年龄" />
          <Field label="简介：" name="intro" component={Input.TextArea} placeholder="请简单介绍一下自己的工作经历" tips="介绍自己的经历介绍自己的经历介绍自己的经历介绍自己的经历" />
          <Field label="" name="submit">
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
