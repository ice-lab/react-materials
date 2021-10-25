---
title: 一行两个 Field
order: 20
importStyle: true
---

````css
.ice-inline-form .field-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.ice-inline-form .ice-field {
  width: 50%;
  height: 40px;
}
.ice-inline-form .field-wrapper {
  overflow: hidden;
  background-color: #ddd;
  padding-top: 15px;
  padding-bottom: 15px;
}
.ice-inline-form .btn {
  margin-top: 20px;
}
````

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';
import { Button, Input, Switch, Select, Checkbox } from '@alifd/next';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const Option = Select.Option;

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
          className="ice-inline-form"
        >
          <h2>个人资料</h2>
          <div className="field-wrapper">
            <Field label="姓名：" name="username" component={Input} placeholder="请输入姓名" />
            <Field label="年龄：" name="age" component={Input} htmlType="number" placeholder="请输入年龄" />
            <Field label="地址：" name="address" component={Input} placeholder="请输入地址" />
            <Field label="手机：" name="tel" component={Input} htmlType="number" placeholder="请输入手机号码" />
            <Field label="邮件：" name="email" component={Input} placeholder="请输入邮件地址" />
          </div>
          
          <Button className="btn" htmlType="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
