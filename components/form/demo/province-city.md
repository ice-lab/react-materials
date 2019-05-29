---
title: 省市联动
order: 14
---

联动

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';
import { Select } from '@alifd/next';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const provinceData = ['Zhejiang', 'Hubei', 'Jiangsu'];
const cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Hubei: ['Wuhan', 'Yichang', 'Jingzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
};

class App extends Component {
  async onSubmit(values) {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

  handleProvinceChange(value, store) {
    store.setValue('province', value)
    store.setProps('city', {dataSource: cityData[value]})
  }

  handleCityChange(value, store) {
    store.setValue('city', value);
    if (value === 'Suzhou') {
      store.setProps('age', {disabled: true})
    } else {
      store.setProps('age', {disabled: false})
    }
  }

  render() {
    return (
      <div>
        <Form
          onSubmit={this.onSubmit}
          style={{color: '#ee7893'}}
        >
          <div>当城市为“武汉”，则 disabled 年龄</div>
          <Field label="年龄" name="age" component="input" type="number" />
          <Field label="省：" name="province" placeholder="Select Province"  dataSource={provinceData} component={Select} type="text" onChange={(value, store) => this.handleProvinceChange(value, store)} />
          <Field label="市：" name="city" placeholder="Select City" dataSource={[]} component={Select} type="text" onChange={(value, store) => this.handleCityChange(value, store)} />
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
