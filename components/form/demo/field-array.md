---
title: FieldArray 组件
order: 22
importStyle: true
---

````css
.field-array-item [class*='ice-col-'] {
  padding-top: 0;
  padding-left: 0;
}
````

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, FieldArray, Field } from '@ice/form';
import { Button, Input, DatePicker } from '@alifd/next';

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
        >
          <h2>新增顾客名单</h2>
          <FieldArray label="新增顾客：" name="customers">
            <Field className="field-array-item" name="customer0" component={Input} placeholder="请输入顾客的名字" />
            <Field className="field-array-item" name="customer1" component={Input} placeholder="请输入顾客的名字" />
            <Field className="field-array-item" name="customer2" component={Input} placeholder="请输入顾客的名字" />
          </FieldArray>
          <Field label="日期：" name="date" component={DatePicker} />
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
