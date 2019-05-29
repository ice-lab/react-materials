---
title: Validation
order: 3
---

Form 级别的校验 & Field 级别的校验

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
          style={{color: '#ee7893'}}
          rules={{
            username: [{
              required: true,
              min: 5,
              message: '姓名至少5个字符'
            }]
          }}
        >
          <div>Hello Form</div>
          <Field label="姓名：" name="username" component="input" type="text" rules={[{
            message: '不能与 Jon Snow 同名',
            validator: (rule, value) => value !== 'Jon Snow',
          }]} />
          <Field label="年龄：" name="age" component='input' type="number" rules={[{
            required: true,
            message: '年龄必填'
          }]} />
          <button type="submit">Submit</button>
        </Form>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
