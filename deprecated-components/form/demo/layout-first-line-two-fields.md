---
title: 第一行两个 Field
order: 21
importStyle: true
---

````css
.ice-first-inline-form .ice-field .ice-field-label {
  display: inline;
  width: auto ;
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
          layout={{
            labelTextAlign: 'left'
          }}
          className="ice-first-inline-form"
        >
          <h2>个人资料</h2>
          <div style={{display: 'flex'}}>
            <Field style={{flexBasis: '35%'}} label="姓名：" name="username" component={Input} placeholder="请输入姓名" />
            <Field style={{flexBasis: '30%'}} label="年龄：" name="age" component={Input} htmlType="number" placeholder="请输入年龄" />
          </div>
          <Field label="地址：" name="address" component={Input} placeholder="请输入地址" />
          <Field label="手机：" name="tel" component={Input} htmlType="number" placeholder="请输入手机号码" />
          <Field label="邮件：" name="email" component={Input} placeholder="请输入邮件地址" />
          <Button style={{marginLeft: '60px', marginTop: '15px'}} className="btn" htmlType="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
