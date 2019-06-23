---
title: 表单布局
order: 16
---

表单布局

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
    const layout = {
      labelCol: 1,
      wrapperCol: 3,
      labelTextAlign: 'right'
    }
    return (
      <div>
        <FormDynamic
          layout={layout}
          onSubmit={this.onSubmit}
          rules={{
            username: [{
              required: true,
              min: 5,
              message: '姓名至少5个字符'
            }]
          }}
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
            tips: "介绍自己的经历介绍自己的经历介绍自己的经历介绍自己的经历"
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
