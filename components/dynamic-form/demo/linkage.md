---
title: 基础联动
order: 5
---

基础联动

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';
import FormDynamic from '@ice/dynamic-form';
import { Button, Input, Radio } from '@alifd/next';

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
          rules={{
            username: [{
              required: true,
              min: 5,
              message: '姓名至少5个字符'
            }],
            age: [{
              required: true,
              message: '大于18岁',
              validator: (rule, value) => value > 18
            }]
          }}
          onSubmit={this.onSubmit}
          components={{
            Input,
            TextArea: Input.TextArea,
            Button,
            Radio,
            RadioGroup: Radio.Group
          }}
          config={[{
            name: 'username',
            type: 'Input',
            label: '姓名：',
            // 数组内为“且”还是“或”？
            // linkages数组内的条件为 或 的逻辑
            effects:[{
              // conditions数组内的为 且 逻辑
              conditions: [{
                symbol: "===",
                value: "Khaleesi"
              }],
              // action 为数组，条件满足是并发
              // show/hide/setValue
              actions: [{
                type: "setValue",
                target: "age",
                value: 28
              }]
            }]
          },{
            name: 'gender',
            type: 'RadioGroup',
            label: '性别：',
            effects: [{
              conditions: [{
                symbol: "===",
                value: "female"
              }],
              actions: [{
                type: "hide",
                target: "age",
              }]
            },{
              conditions: [{
                symbol: "!==",
                value: "female"
              }],
              actions: [{
                type: "show",
                target: "age",
              }]
            }],
            props: {
              dataSource: [{
                value: 'male',
                label: '男'
              },{
                value: 'female',
                label: '女',
              },{
                value: 'x',
                label: 'X'
              }]
            }
          },{
            name: 'age',
            type: 'Input',
            label: '年龄：',
            effects:[{
              conditions: [{
                symbol: ">=",
                value: "18",
                type: "number"
              }],
              actions: [{
                type: "show",
                target: "idCard"
              }]
            },{
              conditions: [{
                symbol: "<",
                value: "18",
                type: "number"
              }],
              actions: [{
                type: "hide",
                target: "idCard"
              }]
            }]
          },{
            name: 'idCard',
            label: '身份证：',
            type: 'Input',
            visible: false,
          },{
            name: 'intro',
            type: 'TextArea',
            label: '简介：'
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
