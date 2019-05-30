---
title: Dialog 表单
order: 12
---

Form 结合对话框

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';
import { Input, Button, Dialog, Radio } from '@alifd/next';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

class App extends Component {
  handleSubmit = null;

  state = {
    visible: false
  };

  onOpen = () => {
    this.setState({
      visible: true
    });
  };

  onClose = reason => {
    this.setState({
      visible: false
    });
  };

  onOk = (e) => {
    this.handleSubmit(e);
  };

  async onSubmit(values) {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

  render() {
    return (
      <div>
        <Button onClick={this.onOpen} type="primary">
          Open dialog
        </Button>
        <Dialog
          title="表单 Form 对话框"
          visible={this.state.visible}
          onOk={this.onOk.bind(this)}
          onCancel={this.onClose.bind(this, 'cancelClick')}
          onClose={this.onClose}
        >
          <Form onSubmit={this.onSubmit}>
            {formCore => {
              this.handleSubmit = formCore.submit.bind(formCore);
              return (
                <div>
                  <Field name="name" label="名称：" component={Input} />
                  <Field name="age" label="年龄：" component={Input} />
                  <Field name="desc" label="描述：" component={Input.TextArea} />
                  <Field name="open" label="是否打开：" component={Radio} />
                  <Field name="openDesc" label="打开时的描述：" component={Input} />
                  <Field name="closeDesc" label="关闭时的描述：" component={Input} />
                </div>
              )
            }}
          </Form>
        </Dialog>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
