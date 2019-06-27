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
          effects={[
            {
              field: 'province',
              handler: formCore => {
                const province = formCore.getFieldValue('province')
                formCore.setValues({
                  city: '',
                  population: 0
                })
                formCore.setFieldProps('city', {dataSource: cityData[province]})
              }
            },
            {
              field: 'city',
              handler: formCore => {
                const city = formCore.getFieldValue('city')
                if (city === 'Suzhou') {
                  formCore.setFieldProps('population', {disabled: true})
                  formCore.setFieldValue('population', 0)
                } else {
                  formCore.setFieldProps('population', {disabled: false})
                }
              }
            }
          ]}
        >
          <div style={{
            marginBottom: 20,
          }}>当城市为“苏州”，则 disabled 人口</div>
          <Field label="省：" layout={{wrapperCol: 2}} name="province" placeholder="Select Province"  dataSource={provinceData} component={Select} />
          <Field label="市：" layout={{wrapperCol: 2}} name="city" placeholder="Select City" dataSource={[]} component={Select} />
          <Field label="人口：" name="population" placeholder="The population of the city" component={Input} htmlType="number" />
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
