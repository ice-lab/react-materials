---
title: 标签布局
order: 17
---

标签布局，当前支持 labelTextAlign 和 labelAlign

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';
import { Button, Input } from '@alifd/next';

class App extends Component {
  render() {
    return (
      <div>
        <Form
          layout = {{
            labelTextAlign: 'left'
          }}
        >
          <h2>标签靠左(labelTextAlign: left)</h2>
          <Field label="name: " name="name" component={Input} placeholder="please input name" />
          <Field label="age: " name="age" component={Input} placeholder="please input age" />
          <Field label="intro: " name="intro" component={Input} placeholder="please input intro" />
        </Form>
        <Form
          layout = {{
            labelTextAlign: 'right'
          }}
        >
          <h2>标签靠右(labelTextAlign: right)</h2>
          <Field label="name: " name="name" component={Input} placeholder="please input name" />
          <Field label="age: " name="age" component={Input} placeholder="please input age" />
          <Field label="intro: " name="intro" component={Input} placeholder="please input intro" />
        </Form>
        <Form
          layout = {{
            labelAlign: 'top',
            labelTextAlign: 'left'
          }}
        >
          <h2>标签在上面(labelAlign: top)</h2>
          <Field label="name: " name="name" component={Input} placeholder="please input name" />
          <Field label="age: " name="age" component={Input} placeholder="please input age" />
          <Field label="intro: " name="intro" component={Input} placeholder="please input intro" />
        </Form>
        <Form
          layout = {{
            labelAlign: 'left'
          }}
        >
          <h2>标签在左边(labelAlign: left)</h2>
          <Field label="name: " name="name" component={Input} placeholder="please input name" />
          <Field label="age: " name="age" component={Input} placeholder="please input age" />
          <Field label="intro: " name="intro" component={Input} placeholder="please input intro" />
        </Form>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
