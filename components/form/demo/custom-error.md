---
title: Custom Error
order: 11
---

自定义错误组件

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@icedesign/form';

const Error = (input) => (
  <Field
    {...input}
    render={({ meta: { error } }) =>
      error ? <span>{error}</span> : null
    }
  />
);

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
          <div>Hello Form</div>
          <Field label="姓名：" name="username" component="input" type="text" />
          <Error label="身份证号" name="idCard" component="input" />
          <Field label="年龄：" name="age" component="input" type="number" />
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
