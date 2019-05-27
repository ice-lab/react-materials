## 安装

```bash
npm install @icedesign/form -S
```

## 组件
可引入 `Form` 和 `Field` 两个组件。

```js
import { Form, Field } from '@icedesign/form';
```

### `Form` 组件有以下属性：

| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ------ | ---- | ---- | ---- | ------ | ---- |
| initialValues |  表单初始值    |  N    |   object   |    {}    |   -   |
| onSubmit |  submit函数，参数是整个表单的 values   |  Y    |   function   |    -    |   -   |
| rules |  校验规则   |  N    |   object   |    {}    |   -   |
| linkages |  联动规则   |  N    |   Array   |    []    |   -   |

`rules` 是一个 Object 或者 Array，`key` 是 `<Field>` 的 `name` 属性值，`value` 是个数组，数组里面的每一项是一个检验，参考 [async-validator](https://github.com/yiminghe/async-validator)。

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

`linkages` 是个数组，数组的每一项是个对象，写法如下：

```js
<Form 
  onSubmit={this.onSubmit}
  linkages={[
    {
      field: 'username',
      handler: formCore => {
        if (formCore.getValue('username') === 'ice') {
          formCore.setValue('age', 2)
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

对象的 `field` 表示监听哪一个 `Field`，对象的 `handler` 表示当监听的 `Field` 发生改变时要做的处理。`handler` 的参数是 `formCore` 对象，该对象暴露一些 api 可以设置 value、error、show/hide 等。

### `Field` 组件有以下属性：

| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ------ | ---- | ---- | ---- | ------ | ---- |
| label |  表单项的 label    |  N    |   string   |    -    |   -   |
| name |  表单项的 name   |  Y    |   string   |    -    |   -   |
| component |  表单类型   |  N    |   string   |    -    | 'input' 'textarea'   |
| rules |  校验规则   |  N    |   object   |    -    |   -   |
| linkages |  联动规则   |  N    |   {}   |    -    |   -   |
| status |  显示隐藏   |  N    |   string   |    |   'show' / 'hide'  |

`Field` 的 `rules` 和 `linkages` 不需要 `name` 作为 key 了，写法如下：
```js
<Form onSubmit={this.onSubmit}>
  <Field label="姓名：" name="username" component="input" type="text" />
  <Field label="昵称：" name="nickname" component="input" type="text" linkages={{
    handler: formCore => {
      if (formCore.getValue('nickname') === 'snow') {
        formCore.setStatus('age', 'show');
      } else {
        formCore.setStatus('age', 'hide');
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

### `formCore` API

`formCore` 会暴露一些 api，使用这些 api 可以获取、设置表单的数据。

- `getValue(name)`  
  获取某一 `Field` 的值，如果不传 `name`，则获取全部表单值
- `setValue(name, value)`  
  设置某一 `Field` 的值
- `getError(name)`  
  获取某一 `Field` 的 error 信息
- `setError(name, errMsg, notify)`  
  设置某一 `Field` 的 error 信息，notify 为 boolean，表示设置 error 信息后，是否立刻显示在页面上
- `getStatus(name)`  
  获取某一 `Field` 的值
- `setStatus(name, status)`  
  设置某一 `Field` 的值
- `handleSubmit`  
  提交表单
- `reset()`  
  重置表单