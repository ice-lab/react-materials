---
title: 复用的 Field 组
order: 7
---

简单 Form 的用法

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';

const Address = ({ name, label }) => (
  <React.Fragment>
    <div>
      <Field
        name={`${name}.street`}
        component="input"
        label={`${label} Street`}
        placeholder={`${label} Street`}
      />
    </div>
    <div>
      <Field
        name={`${name}.city`}
        label={`${label} City`}
        component="input"
        placeholder={`${label} City`}
      />
    </div>
    <div>
      <Field
        name={`${name}.postalCode`}
        label={`${label} Postal Code`}
        component="input"
        placeholder={`${label} Postal Code`}
      />
    </div>
  </React.Fragment>
)

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
          <h1>可复用的 Field Group</h1>
          <Address name="billing" label="Billing" />
          <Address name="shipping" label="Shipping" />
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
