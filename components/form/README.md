## 背景

对于前端，表单开发是一件特别繁琐的事情，尤其在中后台业务中，大家常常会被各种五花八门的表单折磨，又不得不面对现实地去寻找最佳方案，但最终都会发现过度设计的表单组件性能不好，使用简单的表单组件还是需要写大量的业务代码。经过长期的积累以及在社区的调研，我们开发了一个表单组件帮助大家快速地创建一个高性能表单。

## 特性

- 内部几乎无依赖，体积小
- 内部管理表单状态，提升开发效率
- 使用观察者模式提升表单性能
- 强大的校验以及声明式联动
- 可结合第三方组件库(Next、Antd)
- 可自定义 Field

## 架构方案

![](https://img.alicdn.com/tfs/TB1gFAvaUGF3KVjSZFoXXbmpFXa-1024-768.jpg)

如上图所示，整个表单的数据都放在 FormCore 这一层，同时 FormCore 会暴露一些 API，以便获取、设置、处理数据。Form、Field 组件通过 Sub/Pub 模式与 FormCore 通信，FormCore 通知组件何时需要重新渲染。表单提供了校验、联动以及结合 Fusion、Antd 三方组件库使用等能力。

## 为什么不？

**[NoForm](https://github.com/alibaba/nopage)**

NoForm 是一个表单操作(比如说校验、提交、联动等)抽象到上层，下层又包装了 Next、Antd 等组件，UI 上的能力较强，也封装了一些常用的布局，但功能能力较弱，用户实现复杂逻辑还是需要写很多代码。

**[Formik](https://github.com/jaredpalmer/formik)**、**[react-final-form](https://github.com/final-form/react-final-form)**

这两个组件有一些共性，都是通过 render props 的方式实现了复杂的状态管理，在性能上也非常地卓越，在社区得到了大量的好评，但在联动上的能力较弱(目前只能更新 value)，而且如果要集成 Next 或者 Antd 需要将库的表单组件都封装成 Field，成本较高。

## 安装

```bash
$ npm i @ice/form --save
```

## 快速上手

下面例子演示了如何创建一个简单的 form：

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@ice/form';

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
          <div>Simple Form</div>
          <Field label="姓名：" name="username" component="input" type="text" />
          <Field label="年龄：" name="age" component='input' type="number" />
          <Field label="爱好：" name="hobby" component='select'>
            <option value="">--Please choose an option--</option>
            <option value="basketball">篮球</option>
            <option value="football">足球</option>
            <option value="badminton">羽毛球</option>
          </Field>
          <button type="submit">Submit</button>
        </Form>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
```

## Form 组件
| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ------ | ---- | ---- | ---- | ------ | ---- |
| initialValues |  表单初始值    |  N    |   object   |    {}    |   -   |
| onSubmit |  submit函数   |  Y    |   function   |    -    |   -   |
| onChange |  表单变化回调   |  N    |   function   |    -    |   function(values: Object, item: Object) => void <br> 参数: <br> values: {Object} 表单数据 <br> item: {Object} 详细 <br> item.name: {String} 变化的组件名 <br> item.value: {String} 变化的数据 |
| rules |  校验规则   |  N    |   object   |    {}    |   -   |
| effects |  联动规则   |  N    |   array   |    []    |   -   |
| layout |  表单布局   |  N    |   object   |      |   -   |
其他属性比如 `style`、`className` 等均会传递到 `form` 标签上。

```js
// layout
{
  labelAlign: 'left', // label 的位置，'left'、'top'，默认 'left'
  labelTextAlign: 'right', // label 文字左对齐右对齐，默认 'right' 右对齐
  labelCol: 1, // label 占的栅格宽度，共 6 等分，默认 1
  wrapperCol: 3, // 输入控件占的栅格宽度，共 6 等分，默认 3
  tipsCol: 1 // 提示信息占的栅格宽度，共 6 等分，默认 1
}
```

`rules` 是一个 Object，`key` 是 `<Field>` 的 `name` 属性值，`value` 是个数组，数组里面的每一项是一个校验规则，参考 [async-validator](https://github.com/yiminghe/async-validator)。

```js
<Form
  onSubmit={this.onSubmit}
  style={{color: '#ee7893'}}
  rules={{
    username: [{
      required: true,
      min: 5,
      message: '姓名至少5个字符'
    }],
    age:  [{
      required: true,
      message: '年龄必填'
    }]
  }}
>
  <Field label="姓名：" name="username" component="input" type="text" />
  <Field label="年龄：" name="age" component='input' type="number" />
</Form>
```

`effects` 是个数组，写法如下：

```js
<Form
  onSubmit={this.onSubmit}
  effects={[
    {
      field: 'username',
      handler: formCore => {
        if (formCore.getFieldValue('username') === 'ice') {
          formCore.setFieldValue('age', 2)
        }
      }
    }
  ]}
>
  <div>Hello Form</div>
  <Field label="姓名：" name="username" component="input" type="text" />
  <Field label="年龄：" name="age" component='input' type="number" />
  <button type="submit">Submit</button>
</Form>
```

数组的每一项是个对象，对象的 `field` 表示监听哪一个 `Field`，`handler` 函数是处理联动逻辑，监听 `field` 的 `onChange` 事件，然后设置其他表单项的数据，进而达到联动效果。`handler` 的参数是 `formCore` 对象，该对象暴露一些 api 可以设置 value、error、show/hide 等。

## Field 组件
| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ------ | ---- | ---- | ---- | ------ | ---- |
| label |  表单项的 label    |  N    |   string 或者 React Element   |    -    |   -   |
| name |  表单项的 name   |  Y    |   string   |    -    |   -   |
| component |  表单类型，原生 html 标签或者三方组件   |  N    |     |    -    | 'input' 'textarea' Input Radio   |
| rules |  校验规则   |  N    |   object or array   |    -    |   -   |
| effects |  联动规则   |  N    |   object   |    -    |   -   |
| visible |  显示隐藏   |  N    |   boolean   |    |   true/false  |
| format |  格式化 value  |  N    |   function   |    |  function(value) => formatValue  |
| layout |  设置当前 Field 的布局   |  N    |   object   |   同 layout   |  Field 的 layout 设置会覆盖 layout 设置|
| tips |  提示信息   |  N    |   string   |    |    |
| errorRender |  自定义 error 渲染   |  N    |   function(error) {}   |    |   |
| onChange |  自定义 onChange 函数   |  N    |   function() {}   |    | 默认情况下已处理表单的 onChange(eventOrValue) 事件，如果接入的三方表单 onChange 的第一个参数不是 event 或者 value，用户可以主动设置对应的值。比如，接入表单的 onChange(xxx, value) 第二个参数才是 value，则可以手动设置 `formCore.setValue(fieldname, value)`。手动设置 Field 的 onChange 事件时，若需要监听整个表单变化，则需要主动调用 Form 上的 formCore.onChange |

其他属性会传递到 `component` 上，如果没有 `component` 但有 `children`，则属性传递到 `children` 上。
`Field` 的 `rules` 和 `effects` 不需要 `name` 作为 key 了，写法如下：

```js
<Form onSubmit={this.onSubmit}>
  <Field label="姓名：" name="username" component="input" type="text" />
  <Field label="昵称：" name="nickname" component="input" type="text" effects={{
    handler: formCore => {
      if (formCore.getFieldValue('nickname') === 'snow') {
        formCore.setFieldProps('age', {
          visible: true,
        });
      } else {
        formCore.setFieldProps('age', {
          visible: false,
        });
      }
    }
  }} />
  <Field label="年龄：" name="age" component='input' type="number" status="hide" rules={[{
    required: true,
    message: '年龄必填'
  }]} />
  <button type="submit">Submit</button>
</Form>
```

## `formCore` API

`formCore` 会暴露一些 API，使用这些 API 可以获取、设置表单的数据。

- `getFieldValue(name)`
  获取某一 `Field` 的值
- `getValues()`
  获取表单的 values
- `setFieldValue(name, value)`
  设置某一 `Field` 的值
- `setValues(values)`
  设置某些 `Field` 的值
- `getFieldError(name)`
  获取某一 `Field` 的 error 信息
- `getErrors()`
  获取表单的 errors
- `setFieldError(name, errMsg)`
  设置某一 `Field` 的 error 信息
- `setErrors(errors)`
  设置某些 `Field` 的 error 信息
- `getFieldProps(name)`
  获取某一 `Field` 的属性值
- `setFieldProps(name, prop)`
  设置某一 `Field` 的属性值
- `submit()`
  提交表单
- `reset()`
  重置表单

也可以通过属性的方式获取到一些数据：
- `formCore.values`
  获取表单的所有值
- `formCore.errors`
  获取表单校验的错误信息
- `formCore.pristine`
  表单当前的 `values` 是否与 `initialValues` 相等

## 相关链接

- [formik](https://github.com/jaredpalmer/formik)
- [react-final-form](https://github.com/final-form/react-final-form)
- [noform](https://alibaba.github.io/nopage/#/nopage/noform/brief-intro)
