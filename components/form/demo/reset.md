---
title: 重置表单
order: 2
---

`Form` 子组件使用 `function` 渲染时，可以调用 `FormCore` 中的 `API`

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
    const initialValues = {
      username: 'icer',
      age: 3,
      intro: '让前端开发简单而友好'
    };

    return (
      <div>
        <Form
          onSubmit={this.onSubmit}
          initialValues={initialValues}
        >
          {formCore => (
            <div>
              <h2>个人资料</h2>
              <Field label="姓名：" name="username" component={Input} placeholder="请输入名字" />
              <Field label="年龄：" name="age" component={Input} htmlType="number" placeholder="请输入年龄" />
              <Field label="简介：" name="intro" component={Input.TextArea} placeholder="请简单介绍一下自己的工作经历" />
              <Field label="">
                <div>
                  <Button htmlType="submit" style={{marginRight: '20px'}}>Submit</Button>
                  <Button onClick={() => formCore.reset()}>Reset</Button>
                </div>
              </Field>
            </div>
          )}
        </Form>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
