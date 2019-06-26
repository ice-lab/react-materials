---
title: 基本用法
order: 1
---

`Form` 的基本用法

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';
import { Button, Input, Switch, Select, Checkbox } from '@alifd/next';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const Option = Select.Option;

class App extends Component {
  async onSubmit(values) {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

  onChange(values, field) {
    console.log(values, field);
  }

  render() {
    return (
      <div>
        <Form
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          initialValues={{
            username: 'icer',
            age: 3,
            intro: '让前端开发简单而友好'
          }}
        >
          <h2>个人资料</h2>
          <Field label="姓名：" name="username" component={Input} placeholder="请输入名字" />
          <Field label="年龄：" name="age" component={Input} htmlType="number" placeholder="请输入年龄" />
          <Field label="简介：" name="intro" component={Input.TextArea} placeholder="请简单介绍一下自己的工作经历" />
          <Field label="开关：" name="open" component={Switch} valueName="checked" />
          <Field label="尺寸：" name="size" component={Select} value="medium" placeholder="请选择尺寸">
            <Option value="small" key="small">小</Option>
            <Option value="medium" key="medium">中</Option>
            <Option value="large" key="large">大</Option>
          </Field>
          <Field label="选项：" name="checkbox" value={['b']} component={Checkbox.Group}>
            <Checkbox value="a">选项一</Checkbox>
            <Checkbox value="b">选项二</Checkbox>
            <Checkbox disabled value="c">选项三（disabled）</Checkbox>
          </Field>
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
