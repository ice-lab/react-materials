---
title: 自定义Field布局
order: 13
---

简单 Form 的用法

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@icedesign/form';

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
          renderField={(label, component, error) => (
            <div>
              <span>{label}</span>
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
          <div>Hello Form</div>
          <Field label="姓名：" name="username" component="input" type="text" />
          <Field label="年龄：" name="age" component='input' type="number" />
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
