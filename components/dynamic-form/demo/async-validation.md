---
title: 异步校验
order: 4
---

异步校验，校验结果的 `message` 直接 `callback` 即可

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
            rules: {
              async asyncValidator(rule, value, callback) {
                if (!value) {
                  callback('名称必填');
                } else {
                  await sleep(500);

                  if (~['john', 'paul', 'george', 'ringo'].indexOf(value)) {
                    callback('名称已存在');
                  } else {
                    callback(undefined)
                  }
                }
              }
            },
            props: {
              autoComplete: 'off'
            }
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
