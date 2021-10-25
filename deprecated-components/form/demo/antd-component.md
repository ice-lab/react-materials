---
title: 结合 Antd 组件
order: 13
hidden: true
---

使用 Antd 组件

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';
import { Button, Input, Select, Switch, Checkbox, Radio } from 'antd';
import 'antd/dist/antd.css';

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
        >
          {formCore => (
            <div>
              <h2>Antd 组件</h2>
              <Field label="姓名：" name="username" component={Input} placeholder="请输入名字" />
              <Field label="年龄：" name="age" component={Input} type="number" placeholder="请输入年龄" />
              <Field label="简介：" name="intro" component={Input.TextArea} placeholder="请简单介绍一下自己的工作经历" />
              <Field label="性别：" name="gender" rules={[{
                required: true,
                message: '性别必选'
              }]} component={Radio.Group}>
                <Radio id="apple" value="male">Male</Radio>
                <Radio id="watermelon" value="female">Female</Radio>
                <Radio id="orange" value="x">X</Radio>
              </Field>
              <Field label="前端框架：" name="framework" value={[]} component={Checkbox.Group}>
                <Checkbox value="react">React</Checkbox>
                <Checkbox value="vue">Vue</Checkbox>
                <Checkbox value="angular">Angular</Checkbox>
              </Field>
              <Field label="加班：" name="switch" component={Switch} valueName='checked' value={true} checkedChildren="on" unCheckedChildren="off" />
              <Field label="职级：" name="grade" component={Select}>
                <Select.Option value="p6">P6</Select.Option>
                <Select.Option value="p7">P7</Select.Option>
                <Select.Option value="p8" disabled>P8</Select.Option>
              </Field>
              <Field label="">
                <Button htmlType="submit">Submit</Button>
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
