---
title: 省市联动
order: 6
---

省市联动

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';
import { Input, Button, Select } from '@alifd/next';

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

  render() {
    return (
      <div>
        <Form
          onSubmit={this.onSubmit}
        >
          <div>当城市为“苏州”，则 disabled 人口</div>
          <Field label="省：" name="province" placeholder="Select Province"  dataSource={provinceData} component={Select} linkages={{
            handler: formCore => {
              const province = formCore.getValue('province')
              formCore.setValue({
                province,
                city: '',
                population: 0
              })
              formCore.setProps('city', {dataSource: cityData[province]})
            }
          }} />
          <Field label="市：" name="city" placeholder="Select City" dataSource={[]} component={Select} linkages={{
            handler: formCore => {
              const city = formCore.getValue('city')
              formCore.setValue('city', city);
              if (city === 'Suzhou') {
                formCore.setProps('population', {disabled: true})
                formCore.setValue('population', 0)
              } else {
                formCore.setProps('population', {disabled: false})
              }
            }
          }} />
          <Field label="人口：" name="population" placeholder="The population of the city" component={Input} htmlType="number" />
          <Button htmlType="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
