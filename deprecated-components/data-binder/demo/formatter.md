---
title: 接口不符合规范
order: 4
---

通过 responseFormatter 格式化接口返回数据，适配跟 DataBinder 接口规范不一致的情况。

假设业务实际接口格式如下：

```json
{
  "code": 0,
  "msg": "OK",
  "content": {
    "foo": ""
  }
}
```

````jsx
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DataBinder from '@icedesign/data-binder';
import { Button, Loading } from '@alifd/next';

@DataBinder({
  fooData: {
    url: 'https://www.easy-mock.com/mock/5cc669767a9a541c744c9be7/databinder/custom',
    responseFormatter: (responseHandler, body, response) => {
      // 拿到接口返回的 res 数据，做一些格式转换处理，使其符合 DataBinder 的要求
      const newBody = {
        status: body.code === '1' ? 'SUCCESS' : 'ERROR',
        message: body.msg,
        data: body.content
      };
      responseHandler(newBody, response);
    },
    defaultBindingData: {
      foo: 'bar'
    }
  }
})
class App extends Component {
  refreshFoo = () => {
    this.props.updateBindingData('fooData');
  };

  render() {
    const {fooData} = this.props.bindingData;
    return (
      <div>
        <Loading visible={fooData.__loading}>
          foo 的值： {fooData.foo}
        </Loading>
        <div style={{marginTop: 10}}>
          <Button onClick={this.refreshFoo}>请求获取新数据</Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
