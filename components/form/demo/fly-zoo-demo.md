---
title: 飞猪联动 Demo
order: 14
---

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
          renderField={(label, component, error) => (
            <div>
              <span>{label}</span>
              <span>{component}</span>
              <span style={{color: '#ee7893'}}>{error}</span>
            </div>
          )}
        >
          <Field label="Number1：" name="number1" component="input" type="number" linkages={{
            handler: formCore => {
              const value1 = formCore.getValue('number1');
              const value2 = formCore.getValue('number2');
              if (Number(value1) < Number(value2)) {
                formCore.setError('number2', '11111number1不能小于number2', true);
              } else {
                formCore.setError('number2', undefined, true);
              }
            }
          }} />
          <Field label="Number2：" name="number2" component='input' type="number" linkages={{
            handler: formCore => {
              const value1 = formCore.getValue('number1');
              const value2 = formCore.getValue('number2');
              if (Number(value1) < Number(value2)) {
                formCore.setError('number2', '22222number1不能小于number2', true);
              } else {
                formCore.setError('number2', undefined, true);
              }
            }
          }} />
          <button type="submit">Submit</button>
        </Form>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
