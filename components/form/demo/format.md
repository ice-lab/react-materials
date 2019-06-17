---
title: 格式化 Field 值
order: 9
---

Format Feild's value

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
          <h4>名称显示值为小写，昵称保存值为小写</h4>
          <Field name="name" label="名称：" component={Input} getValueFormatter={
            value => value && value.toLowerCase()
          } />
          <Field name="nickname" label="昵称：" component={Input} setValueFormatter={
            value => value && value.toLowerCase()
          } />
          <Field label="年龄：" name="age" component={Input} htmlType="number" />
          <Field label="简介：" name="intro" component={Input.TextArea} />
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
