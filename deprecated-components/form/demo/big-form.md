---
title: 大表单
order: 19
hidden: true
---

输入框后面的数字代表每个 Field 渲染的次数。
当在某个 Field 输入内容时，可以看到 form 组件，只有当前的 Field 会重新渲染，而 formBinder 则是所有的 Field 都会重新渲染。form 渲染性能优于 formBinder。

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';
import { Button, Input } from '@alifd/next';
import { FormBinderWrapper, FormBinder } from '@icedesign/form-binder';

const renderCountStyles = {
  position: 'absolute',
  top: 0,
  right: 0,
  fontStyle: 'normal',
  textAlign: 'center',
  height: '26px',
  width: '26px',
  lineHeight: '26px',
  borderRadius: '13px',
  border: '1px solid #ddd',
  background: '#eee'
};

class RenderCount extends Component {
  renders = 0

  render() {
    return <span style={renderCountStyles}>{++this.renders}</span>
  }
}

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
        <Button onClick={this.toggle} style={{marginBottom: '10px'}}>Toggle Form</Button>
        {!this.state.isFormBinder && (
          <Form
            onSubmit={this.onSubmit}
            renderField={({label, component, error}) => (
              <div style={{marginBottom: '10px'}}>
                <span style={{display: 'inline-block', width: '80px'}}>{label}</span>
                <div style={{position: 'relative', display: 'inline-block'}}>
                  <span>{component}</span>
                  <RenderCount />
                </div>
                <RenderCount />
                <span style={{color: '#ee7893'}}>{error}</span>
              </div>
            )}
          >
            {
              dataSource.map(field => <Field key={field.name} name={field.name} placeholder={`new form ${field.placeholder}`} label={field.label} component={Input} /> )
            }
            <Button htmlType="submit">Submit</Button>
          </Form>
        )}

        {
          this.state.isFormBinder && (
            <div>
              <FormBinderWrapper
                value={this.state.value}
                ref="form"
              >
                {
                  dataSource.map(field => (
                    <div key={field.name} style={{marginBottom: '10px'}}>
                      <span style={{display: 'inline-block', width: '80px'}}>{field.label}：</span>
                      <FormBinder name={field.name} require >
                        <div style={{position: 'relative', display: 'inline'}}>
                          <RenderCount />
                          <Input placeholder={`formBinder ${field.placeholder}`} />
                        </div>
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
