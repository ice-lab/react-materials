---
title: 复用 Field 组
order: 10
---

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormDynamic from '@ice/dynamic-form';
import { Field } from '@ice/form';
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
        <h1>可复用的 Field Group</h1>
        <FormDynamic
          components={{
            Address,
            Button
          }}
          config={[{
            name: 'billing',
            type: 'Address',
            label: 'Billing',
            props: {
              name: 'billing',
              label: 'Billing'
            }
          },{
            name: 'shipping',
            type: 'Address',
            label: 'shipping',
            props: {
              name: 'shipping',
              label: 'shipping'
            }
          }]}
          buttons={[{
            name: 'submit',
            type: 'Button',
            text: 'Submit',
            props: {
              htmlType: 'submit'
            }
          }]}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
