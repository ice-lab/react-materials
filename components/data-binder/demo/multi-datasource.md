---
title: 一个组件多个数据源
order: 3
---

某些场景下，一个组件会用到多个数据源，通过 key 来区分即可。

````jsx
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DataBinder from '@icedesign/data-binder';
import {
  Button,
  Loading
} from '@alifd/next';

@DataBinder({
  foo1Data: {
    url: 'https://www.easy-mock.com/mock/5cc669767a9a541c744c9be7/databinder/success',
    defaultBindingData: {
      foo: 'bar'
    }
  },
  foo2Data: {
    url: 'https://www.easy-mock.com/mock/5c7c9334869f506acc184ff7/ice/foo2',
    defaultBindingData: {
      foo: 'bar'
    }
  }
})
class App extends Component {

  refreshFoo1 = () => {
    this.props.updateBindingData('foo1Data', {
      params: {
        bar: 'foo'
      }
    });
  };
  refreshFoo2 = () => {
    this.props.updateBindingData('foo2Data', {
      params: {
        bar: 'foo'
      }
    });
  };

  render() {
    const {foo1Data, foo2Data} = this.props.bindingData;

    return (
      <div>
        <div>
          <Loading visible={foo1Data.__loading}>
            <div>
              foo1 的值： {foo1Data.foo}
            </div>
          </Loading>
          <div style={{marginTop: 10}}>
            <Button onClick={this.refreshFoo1}>请求获取 foo1 新数据</Button>
          </div>
        </div>
        <div style={{marginTop: 30}}>
          <Loading visible={foo2Data.__loading}>
            <div>
              foo2 的值： {foo2Data.foo}
            </div>
          </Loading>
          <div style={{marginTop: 10}}>
            <Button onClick={this.refreshFoo2}>请求获取 foo2 新数据</Button>
          </div>
        </div>
        <h3>当前页面是否有模块正在加载：{this.props.bindingData.__loading ? '是' : '否'}</h3>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
