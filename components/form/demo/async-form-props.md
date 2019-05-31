---
title: 异步更新 Form props
order: 15
---

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

  state = {
    renderField: null,
    data: {},
    rules: {
      username: [{
        required: true,
        min: 5,
        message: '姓名至少5个字符'
      }]
    }
  }

  async componentDidMount() {
    await sleep(1000);
    this.setState({
      renderField: (label, component, error) => (
        <div>
          <div>{label}</div>
          <span>{component}</span>
          <span style={{color: '#ee7893'}}>{error}</span>
        </div>
      ),
      data: {
        username: 'erikras',
        age: 20,
        desc: '我是 erikras'
      },
      rules: {
        username: [{
          required: true,
          min: 10,
          message: '姓名至少10个字符'
        }]
      }
    })
  }

  render() {
    return (
      <div>
        <Form
          onSubmit={this.onSubmit}
          initialValues={this.state.data}
          renderField={this.state.renderField}
          rules={this.state.rules}
        >
          <Field label="姓名：" name="username" component={Input} />
          <Field label="年龄：" name="age" component={Input} htmlType="number" />
          <Field label="描述: " name="desc" component={Input.TextArea} />
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