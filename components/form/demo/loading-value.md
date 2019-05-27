---
title: Loading Value
order: 9
---

加载数据

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@icedesign/form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const load = async () => {
  await sleep(2000);
  return {
    name: 'erikras',
    age: 20,
    desc: '我是 erikras'
  };
}

class App extends Component {
  state = { data: {} }

  async componentDidMount() {
    this.setState({ loading: true });
    const data = await load();
    this.setState({ loading: false, data });
  }

  async onSubmit(values) {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

  render() {
    const Age = (<span style={{color: 'green'}}>年龄：</span>);
    return (
      <div>
        <h1>加载表单数据并且初始化</h1>
        <Form
          initialValues={this.state.data}
          onSubmit={this.onSubmit}
        >
          {this.state.loading && <div className="loading">loading...</div>}
          <Field name="name" label={<span style={{color: 'red'}}>名称：</span>} component="input" />
          <Field name="age" label={Age} component="input" />
          <Field name="desc" label="描述: " component="textarea" />
          <Field name="open" label="是否打开: " component="input" type="checkbox" value="option1" />
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
