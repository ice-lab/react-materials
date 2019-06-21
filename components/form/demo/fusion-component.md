---
title: Fusion 表单组件
order: 23
---

Fusion 表单组件

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';
import { Button, Input, NumberPicker, Switch, Range, Select, DatePicker, TimePicker, Checkbox, Radio } from '@alifd/next';

const Option = Select.Option;

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
          <Field label="Password:" name="password" htmlType="password" component={Input} placeholder="请输入密码" />
          <Field label="NumberPicker:" name="numberPicker" defaultValue={3} component={NumberPicker} />
          <Field label="Switch:" name="switch" component={Switch} valueName="checked" value={false} />
          <Field label="Range:" name="range" defaultValue={30} scales={[0, 100]} marks={[0, 100]} component={Range} />
          <Field label="Select:" name="select" component={Select} defaultValue='lucy'>
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
            <Option value="disabled" disabled>disabled</Option>
            <Option value="hugohua">hugohua</Option>
          </Field>
          <Field label="DatePicker:" name="date" component={DatePicker} />
          <Field label="TimePicker:" name="time" component={TimePicker} />
          <Field label="Checkbox:" name="checkbox" defaultValue={[]} component={Checkbox.Group}>
            <Checkbox value="a">option 1 </Checkbox>
            <Checkbox value="b">option 2 </Checkbox>
            <Checkbox disabled value="c">option 3（disabled）</Checkbox>
          </Field>
          <Field label="Radio:" name="radio" component={Radio.Group}>
            <Radio value="apple">apple</Radio>
            <Radio value="banana">banana</Radio>
            <Radio disabled value="cherry">cherry（disabled）</Radio>
          </Field>
          <Field label="" name="submit">
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
