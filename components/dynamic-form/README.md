## 背景

基于``ice/form``实现的动态表单组件。

## 特性

- 内部几乎无依赖，体积小
- 强大的校验以及声明式联动
- 可结合第三方组件库(Next、Antd)
- 可自定义表单组件


## 安装

```bash
$ npm i @ice/dynamic-form --save
```

## 快速上手

下面例子演示了如何创建一个简单的 form：

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

