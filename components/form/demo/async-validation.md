---
title: Async Validation
order: 12
---

异步校验

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
        <Form onSubmit={this.onSubmit}>
          {(formCore) => {
            return (
              <div>
                <Field name="name" label="名称: " component="input" rules={{
                  async asyncValidator(rule, value, callback) {
                    if (!value) {
                      return callback(new Error('名称必填'));
                    }
                    await sleep(500);
      
                    if (~['john', 'paul', 'george', 'ringo'].indexOf(value)) {
                      return callback(new Error('名称已存在'));
                    }
                  }
                }} />
                <Field name="age" label="年龄: " component="input" />
                <Field name="desc" label="描述: " component="textarea" />
                <Field name="open" label="是否打开: " component="input" value="option1" type="checkbox" />
                <button type="submit">提交</button>
              </div>
            );
          }}
        </Form>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
