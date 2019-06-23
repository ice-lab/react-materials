---
title: 基本用法
order: 1
---

`Form` 的基本用法

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
              htmlType: 'submit'
            }
          }]}
        />
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
