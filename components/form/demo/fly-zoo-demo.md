---
title: 飞猪联动 Demo
order: 7
---

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
          fieldLayout={(label, component, error) => (
            <div>
              <span>{label}</span>
              <span>{component}</span>
              <span style={{color: '#ee7893'}}>{error}</span>
            </div>
          )}
        >
          <Field label="Number1：" name="number1" component={Input} htmlType="number" linkages={{
            handler: formCore => {
              const value1 = formCore.getValue('number1');
              const value2 = formCore.getValue('number2');
              if (Number(value1) < Number(value2)) {
                formCore.setError('number2', 'number1不能小于number2');
              } else {
                formCore.setError('number2', undefined);
              }
            }
          }} />
          <Field label="Number2：" name="number2" component={Input} htmlType="number" linkages={{
            handler: formCore => {
              const value1 = formCore.getValue('number1');
              const value2 = formCore.getValue('number2');
              if (Number(value1) < Number(value2)) {
                formCore.setError('number2', 'number1不能小于number2');
              } else {
                formCore.setError('number2', undefined);
              }
            }
          }} />
          <Button htmlType="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
