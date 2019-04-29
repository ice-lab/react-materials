---
title: POST 请求获取数据
order: 2
---

通过 POST 请求获取数据，POST 请求数据时，请求参数可以放在 url query 或者 body 上，具体由接口实现决定：

- url query: 通过 params 参数指定
- body: 通过 data 参数指定

具体可参考 axios 的文档说明。

````jsx
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DataBinder from '@icedesign/data-binder';
import {
  Button, Loading
} from '@alifd/next';

@DataBinder({
  fooData: {
    url: 'https://www.easy-mock.com/mock/5cc669767a9a541c744c9be7/databinder/post',
    method: 'POST',
    defaultBindingData: {
      foo: 'bar'
    }
  }
})
class App extends Component {
  componentDidMount() {
    this.props.updateBindingData('fooData', {
      // 参数放在 query 上
      params: {
        key: 'init'
      }
    });
  }

  refreshFoo = () => {
    this.props.updateBindingData('fooData', {
      // 参数放在 body 上
      data: {
        bar: 'foo'
      }
    });
  };

  render() {
    const {fooData} = this.props.bindingData;

    return (
      <div>
        <Loading visible={fooData.__loading}>
          foo 的值： {fooData.foo}
        </Loading>
        <div style={{marginTop: 10}}>
          <Button onClick={this.refreshFoo}>主动获取新数据</Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
