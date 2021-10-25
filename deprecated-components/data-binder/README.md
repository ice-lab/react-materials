---
title: DataBinder
category: Components
chinese: 数据交互方案
---

ICE 前后端数据绑定、交互方案。基于一定的**约定**帮你在组件上绑定一些数据和用来更新数据的 API，让开发者专注于 render 逻辑，从而屏蔽掉 AJAX、state 管理等开发成本。

## API

以下 API 会注入到 Class 中，通过 `this.props.xxxx` 的方式调用。

| API              |  说明          |  类型   | 默认值 | 备注   |
| --------          | ---------    | ------ | ------ | ------- |
| updateBindingData | 更新数据源 | func       |        |      |
| bindingData     | 返回数据     | object    |         |      |

## 使用

### 1. 配置数据源

DataBinder 基于 HOC 的思路，采用 decorator 的方式使用，即在 class 上面调用并配置相关信息即可生效。

```jsx
@DataBinder({
  '模块名 key': {
    // AJAX 部分的参数完全继承自 axios ，参数请详见：https://github.com/axios/axios
    url: 'http://xxxx.json',
    method: 'GET',
    params: {
      page: 1
    },
    // 接口默认数据
    defaultBindingData: {
    }
  }
})
class ListView extends Component {
  ...
}
```

详细的解释下：

* 模块名 key：**必填**，每个 key 代表一个数据源（接口）
* defaultBindingData: **选填** 该字段配置当前模块数据初始化默认值，如果当前模块有异步接口配置，则模块的字段需要与接口返回的数据字段一一对应。该参数可选，因为有些接口只需要提交成功即可，无需 UI 变化。
* 其他：**选填**，配置请求相关参数，完成前后端通信，默认基于 [axios](https://github.com/axios/axios)，因此这里可以使用 axios 的任意参数。同时业务可以自定义其他 request client。

### 2. 请求并使用数据源

对某个 React class 添加 DataBinder 绑定配置之后，DataBinder 会通过 HOC 在组件上添加一个 props `bindingData`，用来存放配置的所有数据，模块 key 为你对应的 DataSource key 的前部分，比如：配置 `account` 可以通过 `this.props.bindingData.account` 获取到被绑定的数据，第一次为 `defaultBindingData` 里面配置的数据。

因此你可以在你 render 部分的代码编写如下代码调用：

```jsx
@DataBinder({
  listData: {
    url: '/getAccountTableList.json',
  },
})
class ListView extends Component {
  componentDidMount() {
    // 组件加载时获取数据源，数据获取完成会触发组件 render
    this.props.updateBindingData('dataSource');
  }

  render() {
    const { listData } = this.props.bindingData;
    return (
      <div>
        <Table loading={listData.__loading} dataSource={listData.list} />
      </div>
    );
  }
}
```

## 常见问题

### 接口协议规范

DataBinder 对数据接口的 response 做了一层规范，不符合该规范的接口将无法正常获取到数据，response 规范：

```json
{
  // 必选：标记接口是否成功，非 SUCCESS 都视为失败
  "status": "SUCCESS",
  // 可选：status 为非 SUCCESS 时显示报错 UI 会使用该字段
  "message": "成功",
  // 必选：实际数据，会将 data 下的所有字段挂载在对应的 bindingData 上
  "data": {
    "dataSource": [],
    "page": 1
  }
}
```

如果业务里的接口跟该规范不符，可以通过 `responseFormatter` 做一次转换。具体请参见组件 demo。

### 自定义前后端通信方式 requestClient

DataBinder 默认使用 axios 完成前后端通信，实际场景里业务可能使用 jsonp，RPC 或者其他协议通信，此时需要通过自定义 requestClient 的方式实现，具体请参见组件 demo。

### 自定义请求 callback

DataBinder 默认的请求成功和失败的行为是弹一个 Toast 将接口的 message 字段信息展示出来。如果你需要自定义全局的成功失败行为，可以通过自定义 callback 的方式实现，具体请参见组件 demo。

### 业务自定义 DataBinder

如果业务里出现类似上述所说的场景，比如：接口规范不一致、需要全局统一处理请求失败成功逻辑、使用非 axios 的方式请求数据（比如 jsonp），推荐基于 DataBinder 封装一个自定义的 DataBinder，然后代码里使用自定义 DataBinder，具体请参见组件 demo。
