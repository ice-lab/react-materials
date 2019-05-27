---
title: Format
order: 8
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
        <Form onSubmit={this.onSubmit}>
          <h1>Field Format</h1>
          <Field name="name" label="名称: " component="input" format={value => value && value.toLowerCase()} />
          <Field name="age" label="年龄: " component="input" />
          <Field name="desc" label="描述: " component="textarea" />
          <Field name="open" label="是否打开: " component="input" type="checkbox" />
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
