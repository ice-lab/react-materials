---
title: 异步加载数据渲染
order: 11
---

异步加载数据进行首屏渲染

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';
import { Button, Input } from '@alifd/next';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const load = async () => {
  await sleep(2000);
  return {
    name: 'erikras',
    age: 20,
    desc: '我是 erikras'
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
        <Form
          initialValues={this.state.data}
          onSubmit={this.onSubmit}
          effects={[{
            field: 'name',
            handler: formCore => {
              const name = formCore.getFieldValue('name');
              if (name === 'erikras') {
                formCore.setFieldValue('age', 28)
              }
            }
          }]}
        >
          {this.state.loading && <div className="loading">loading...</div>}
          <Field name="name" label={<span style={{color: 'red'}}>名称：</span>} component={Input} placeholder="请输入名字" />
          <Field name="age" label={Age} component={Input} placeholder="请输入年龄" />
          <Field name="desc" label="简介：" component={Input.TextArea} placeholder="请简单介绍一下自己的工作经历" />
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
