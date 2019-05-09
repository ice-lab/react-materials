---
title: 简单的用法
order: 1
---

通过 GET 方式请求数据，基于 `__loading` 属性可以区分请求的不同状态，基于 `__error` 属性可以区分接口是否报错。

````jsx
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DataBinder from '@icedesign/data-binder';
import {
  Button, Loading
} from '@alifd/next';

@DataBinder({
  fooData: {
    url: 'https://www.easy-mock.com/mock/5cc669767a9a541c744c9be7/databinder/success',
    defaultBindingData: {
      foo: 'bar'
    }
  }
})
class App extends Component {
  componentDidMount() {
    this.props.updateBindingData('fooData', {
      params: {
        key: 'init'
      }
    }, (response) => {
      // 请求回调，可按需使用
      console.log('数据加载完成啦', response);
    });
  }

  refreshFoo = () => {
    this.props.updateBindingData('fooData', {
      params: {
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
        <h3>数据加载中：{fooData.__loading ? '是' : '否'}</h3>
        <h3>接口是否报错：{fooData.__error ? fooData.__error.message : '无'}</h3>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
