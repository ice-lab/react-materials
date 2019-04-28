# MultiSelector

通用的多选组件

## API

| 参数名      | 说明           | 必填 | 类型        | 默认值       | 备注  |
| ---------- | ------------- | ---- | ---------- | ----------- | ---- |
|   size    |   组件尺寸      |   否   |  string      | medium  | small/medium/large |
|   disabled    |   value 受控    |   否   |  array       |     |      |
|   width    |   组件宽度       |   否   |  number       |     |      |
| placeholder|  placeholder  |   否   |  string       |     |      |
|defaultValue|默认 value（不受控）|   否   |  array      |         |      |
|   value    |   value 受控    |   否   |  array       |     |      |
|defaultDataSource|默认 dataSource|否|array|   |   |
|   onChange |   回调          |   否   |  func       |     |      |
|   fetchData    |  搜索获取数据 |   是   |  promise    |     |      |
|   renderOption    | 自定义渲染下拉项  |   否   |  func(item) |     |      |
|   getFillValue    | 自定义选中态的字符串|   否   |  func(item)| item.value  |      |
|   min    |   最少个数    |   否   |  number       |     |      |
|   max    |   最大个数   |   否   |  number       |     |      |

## 参数说明

### fetchData

方法必须返回一个 promise 或者 async，需要按照约定返回固定的数据格式：

```js
<MultiSelector
  fetchData={async ({ inputValue }) => {
    const response = await axios({
      url: '',
      params: {
        keyword: inputValue
      }
    });

    // dataSource 的单个 item 必须有 value 属性
    return response.data.data.dataSource || [];
  }}
/>
```

### defaultDataSource

回填 value 或者设置了 defaultValue 的场景必须设置该属性，否则无法渲染选中的 tag