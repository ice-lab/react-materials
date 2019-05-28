---
title: Reset Form
order: 2
---

调用 store 中的方法，Form 子组件使用 function 渲染

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@icedesign/form';

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
          style={{color: '#ee7893'}}
          rules={{
            username: [{
              required: true,
              min: 5,
              message: '姓名至少5个字符'
            }],
            age:  [{
              required: true,
              message: '年龄必填'
            }]
          }}
        >
          {(store) => (
            <div>
              <div>Hello Form</div>
              <Field label="姓名：" name="username" component="input" type="text" />
              <Field label="年龄：" name="age" component="input" type="number" />
              <button type="submit">Submit</button>
              <button onClick={(e) => store.reset(e)}>Reset</button>
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
