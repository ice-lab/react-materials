---
title: 复杂联动
order: 7
---

同时监听两个 Field 

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';
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
        <Form
          onSubmit={this.onSubmit}
          effects={[
            {
              field: 'number1',
              handler: formCore => {
                const value1 = formCore.getFieldValue('number1');
                const value2 = formCore.getFieldValue('number2');
                if (Number(value1) < Number(value2)) {
                  formCore.setFieldError('number2', 'number1不能小于number2');
                } else {
                  formCore.setFieldError('number2', undefined);
                }
              }
            },
            {
              field: 'number2',
              handler: formCore => {
                const value1 = formCore.getFieldValue('number1');
                const value2 = formCore.getFieldValue('number2');
                if (Number(value1) < Number(value2)) {
                  formCore.setFieldError('number2', 'number1不能小于number2');
                } else {
                  formCore.setFieldError('number2', undefined);
                }
              }
            }
          ]}
        >
          <Field label="Number1：" name="number1" component={Input} htmlType="number" placeholder="number1 必须大于等于 number2" />
          <Field label="Number2：" name="number2" component={Input} htmlType="number" placeholder="number2 必须小于等于 number1" />
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
