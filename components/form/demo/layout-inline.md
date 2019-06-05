---
title: inline 布局
order: 20
---

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';
import { Button, Input, Switch, Select, Checkbox } from '@alifd/next';
import './layout-inline.scss';

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
        >
          <h2>个人资料</h2>
          <div className="field-wrapper">
            <Field label="姓名：" name="username" component={Input} />
            <Field label="年龄：" name="age" component={Input} htmlType="number" />
            <Field label="地址：" name="address" component={Input} />
            <Field label="手机：" name="tel" component={Input} htmlType="number" />
            <Field label="邮件：" name="email" component={Input} />
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
