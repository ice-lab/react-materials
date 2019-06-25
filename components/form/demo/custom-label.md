---
title: 自定义标签
order: 18
---

`Form` 自定义标签，给每个标签增加必填符号

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';
import { Button, Input, Switch, Select, Checkbox } from '@alifd/next';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const Option = Select.Option;

function renderLabel(name) {
  return (
    <span>
      <span style={{
        color: 'red',
      }}>*</span>
      {name}
    </span>
  );
}

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
          rules={{
            username: [{
              required: true,
              min: 5,
              message: '姓名至少5个字符'
            }],
            age: [{
              required: true,
              message: '年纪必填'
            }],
            intro: [{
              required: true,
              message: '简介必填'
            }],
          }}
        >
          <h2>个人资料</h2>
          <Field label={renderLabel('姓名：')} name="username" component={Input} placeholder="请输入名字" />
          <Field label={renderLabel('年龄：')} name="age" component={Input} htmlType="number" placeholder="请输入年龄" />
          <Field label={renderLabel('简介：')} name="intro" component={Input.TextArea} placeholder="请简单介绍一下自己的工作经历"/>
          <Field label="开关：" name="open" component={Switch} />
          <Field label="尺寸：" name="size" component={Select} placeholder="请选择尺寸">
            <Option value="small" key="small">小</Option>
            <Option value="medium" key="medium">中</Option>
            <Option value="large" key="large">大</Option>
          </Field>
          <Field label="选项：" name="checkbox" component={Checkbox.Group}>
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
