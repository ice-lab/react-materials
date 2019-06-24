---
title: 原生 html 标签
order: 14
---

使用原生 html 标签

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';

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
          <Field label="姓名：" name="username" component="input" placeholder="请输入名字" />
          <Field label="年龄：" name="age" component="input" type="number" placeholder="请输入年龄" />
          <Field label="简介：" name="intro" component="textarea" placeholder="请简单介绍一下自己的工作经历" />
          <Field label="框架：" name="framework" component="select" value="react">
            <option value="vue">Vue</option> 
            <option value="react">React</option>
            <option value="angular">Angular</option>
          </Field>
          <Field label="ICE背景：" name="ice" component="input" valueName='checked' value={false} type="radio" />
          <Field label="">
            <button type="submit">Submit</button>
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
