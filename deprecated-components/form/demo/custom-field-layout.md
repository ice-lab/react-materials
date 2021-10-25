---
title: 自定义 Field 布局
order: 8
---

通过 Form 的 renderField 自定义 Field 布局

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
          renderField={({label, component, error}) => (
            <div style={{marginBottom: '10px'}}>
              <div>{label}</div>
              <span>{component}</span>
              <span style={{color: '#ee7893'}}>{error}</span>
            </div>
          )}
          rules={{
            username: [{
              required: true,
              min: 5,
              message: '姓名至少5个字符'
            }]
          }}
        >
          <Field label="姓名：" name="username" component={Input} placeholder="请输入名字" />
          <Field label="年龄：" name="age" component={Input} htmlType="number" placeholder="请输入年龄" />
          <Button htmlType="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
