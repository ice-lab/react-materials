---
title: 基础校验
order: 3
---

校验规则可以写在 `Form` 属性上或者 `Field` 属性上

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormDynamic from '@ice/dynamic-form';
import { Button, Input } from '@alifd/next';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

class App extends Component {
  async onSubmit(values) {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

  render() {
    return (
      <div>
        <h2>个人资料</h2>
        <FormDynamic
          onSubmit={this.onSubmit}
          components={{
            Input,
            TextArea: Input.TextArea,
            Button
          }}
          config={[{
            name: 'username',
            type: 'Input',
            label: '姓名：',
          },{
            name: 'age',
            type: 'Input',
            label: '年龄：',
            rules: [{
              message: '年龄必填且大于18岁',
              required: true,
              validator: (rule, value) => value > 18
            }]
          },{
            name: 'intro',
            type: 'TextArea',
            label: '简介：',
          }]}
          buttons={[{
            name: 'submit',
            type: 'Button',
            text: 'Submit',
            props: {
              htmlType: 'submit',
              style: {
                marginRight: '20px'
              }
            }
          }]}
        >
        </FormDynamic>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
