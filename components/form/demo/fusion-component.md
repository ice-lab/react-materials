---
title: Fusion/Ant Component
order: 6
---

使用 Fusion 组件

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@icedesign/form';
import { Button, Input, Radio, Select, Checkbox, Switch } from '@alifd/next';
import { Checkbox as ACheckbox, Radio as ARadio } from 'antd';
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
          rules={{
            username: [{
              required: true,
              min: 5,
              message: '姓名至少5个字符'
            }],
            age: [{
              required: true,
              message: '年龄必填'
            }]
          }}
          layout={{
            formLayout: 'hoz',
            labelTextAlign: 'right',
            labelCol: 2,
            wrapperCol: 5, // 暂时控制不到三方库的 UI
          }}
        >
          {formCore => (
            <div>
              <div>Hello Form</div>
              <Field label="姓名：" name="username" component={Input} />
              <Field label="年龄：" name="age" component={Input} htmlType="number" />
              <Field label="简介：" name="description" component={Input.TextArea} />
              <Field label="Fusion Radio：" name="ffruit" rules={[{
                required: true,
                message: '水果必选'
              }]} component={Radio.Group}>
                <Radio id="apple" value="apple">Apple</Radio>
                <Radio id="watermelon" value="watermelon">Watermelon</Radio>
                <Radio id="orange" value="orange">Orange</Radio>
              </Field>
              <Field label="Antd Radio：" name="afruit" rules={[{
                required: true,
                message: '水果必选'
              }]} component={ARadio.Group}>
                <ARadio id="apple" value="aapple">Apple</ARadio>
                <ARadio id="watermelon" value="awatermelon">Watermelon</ARadio>
                <ARadio id="orange" value="aorange">Orange</ARadio>
              </Field>
              <Field label="Antd Checkbox：" name="aframework" value={['avue']} component={ACheckbox.Group}>
                <ACheckbox value="areact">antd React</ACheckbox>
                <ACheckbox value="avue">andt Vue</ACheckbox>
                <ACheckbox value="aangular">antd Angular</ACheckbox>
              </Field>
              <Field label="Fusion Checkbox：" name="fframework" value={[]} component={Checkbox.Group}>
                <Checkbox value="react">React</Checkbox>
                <Checkbox value="vue">Vue</Checkbox>
                <Checkbox value="angular">Angular</Checkbox>
              </Field>
              <Field label="Switch：" name="switch" component={Switch} checkedChildren="on" unCheckedChildren="off" />
              <Field label="Select：" name="select" component={Select}>
                <Select.Option value="option1">option1</Select.Option>
                <Select.Option value="option2">option2</Select.Option>
                <Select.Option value="option3" disabled>disabled</Select.Option>
              </Field>
              <Button htmlType="submit">Submit</Button>
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
