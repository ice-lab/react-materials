---
title: 复用 Field 组
order: 10
---

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';
import { Button, Input } from '@alifd/next';

const Address = ({ name, label }) => (
  <React.Fragment>
    <div>
      <Field
        name={`${name}.street`}
        component={Input}
        label={`${label} Street：`}
        placeholder={`${label} Street`}
      />
    </div>
    <div>
      <Field
        name={`${name}.city`}
        label={`${label} City：`}
        component={Input}
        placeholder={`${label} City`}
      />
    </div>
    <div>
      <Field
        name={`${name}.postalCode`}
        label={`${label} Postal Code：`}
        component={Input}
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
