---
title: 格式化 Field 值
order: 9
---

Format Feild's value

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';
import { Button, DatePicker, Input } from '@alifd/next';

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
          <h4>姓名显示、存储均为小写，日期存储格式为时间戳</h4>
          <Field name="name" label="姓名：" component={Input} placeholder="请输入姓名" setValueFormatter={
            value => value && value.toLowerCase()
          } getValueFormatter={
            value => value && value.toLowerCase()
          } />
          <Field label="生日:" name="date" component={DatePicker} getValueFormatter={
            value => Date.parse(value)
          } />
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
