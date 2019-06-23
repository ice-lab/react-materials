---
title: 异步加载数据渲染
order: 11
---

异步加载数据进行首屏渲染

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormDynamic from '@ice/dynamic-form';
import { Button, Input } from '@alifd/next';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const load = async () => {
  await sleep(2000);
  return {
    username: 'erikras',
    age: 20,
    intro: '我是 erikras'
  };
}

class App extends Component {
  state = { data: {} }

  async componentDidMount() {
    this.setState({ loading: true });
    const data = await load();
    this.setState({ loading: false, data });
  }

  async onSubmit(values) {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

  render() {
    const Age = (<span style={{color: 'green'}}>年龄：</span>);
    return (
      <div>
        <h2>加载表单数据并且初始化（label支持自定义jsx）</h2>
        
        <FormDynamic
          value={this.state.data}
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
