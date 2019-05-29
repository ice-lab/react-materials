---
title: Simple Usage
order: 1
---

简单 Form 的用法

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';

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
        >
          <div>Hello Form</div>
          <Field label="姓名：" name="username" component="input" type="text" />
          <Field label="年龄：" name="age" component='input' type="number" />
          <Field label="爱好：" name="hobby" component='select'>
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
          </Field>
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
