---
title: 大表单
order: 18
---

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';
import { Button, Input } from '@alifd/next';
import { FormBinderWrapper, FormBinder } from '@icedesign/form-binder';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

let dataSource = [];
for (let i = 0; i < 150; i++) {
  const item = {
    label: `Label${i}`,
    name: `name${i}`,
    placeholder: `placeholder ${i}`
  };

  dataSource.push(item);
}

class App extends Component {
  state = {
    value: {
      email: '',
      name: '',
      password: '',
    },
    isFormBinder: false
  };

  formChange = value => {
    this.setState({ value });
  };

  toggle = () => {
    this.setState({
      isFormBinder: !this.state.isFormBinder
    })
  }

  async onSubmit(values) {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

  render() {
    return (
      <div>
        <h3>表单性能测试 form vs formBinder</h3>
        <Button onClick={this.toggle}>Toggle Form</Button>
        {!this.state.isFormBinder && (
          <Form
            onSubmit={this.onSubmit}
          >
            {dataSource.map(field => <Field key={field.name} name={field.name} placeholder={`new form ${field.placeholder}`} label={field.label} component={Input} />)}
            <Field label="">
              <Button htmlType="submit">Submit</Button>
            </Field>
          </Form>
        )}

        {
          this.state.isFormBinder && (
            <div>
              <FormBinderWrapper
                value={this.state.value}
                onChange={this.formChange}
                ref="form"
              >
                {
                  dataSource.map(field => (
                    <div>
                      <span>名称：</span>
                      <FormBinder name={field.name} require >
                        <Input placeholder={`formBinder ${field.placeholder}`} />
                      </FormBinder>
                    </div>
                  ))
                }
              </FormBinderWrapper>
            </div>
          )
        }
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
