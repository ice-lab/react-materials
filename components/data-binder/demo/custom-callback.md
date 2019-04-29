---
title: 自定义请求 callback
order: 5
---

自定义请求成功或者失败的处理逻辑。

````jsx
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DataBinder from '@icedesign/data-binder';
import { Button, Loading, Message } from '@alifd/next';

@DataBinder({
  foo1Data: {
    url: 'https://www.easy-mock.com/mock/5c7c9334869f506acc184ff7/ice/foo1',
    // ajax 参数参见：https://github.com/axios/axios
    success: (res, defaultCallback, originResponse) => {
      console.log('res', res, originResponse);
      defaultCallback();
    },
    error: (res, defaultCallback, originResponse) => {
      console.log('res', res, originResponse);
      defaultCallback();
    },

    defaultBindingData: {
      foo: 'bar'
    }
  },
  foo2Data: {
    url: 'http://dip.alibab2a-inc.com/api/v2/services/schema/mock/53138',
    // ajax 参数参见：https://github.com/axios/axios
    error: (res, defaultCallback, originResponse) => {
      console.log('res', res, originResponse);
      console.log('详细网络问题可以通过 originResponse 参数拿到：', originResponse.status);
      defaultCallback();
    },
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
          <h3>foo1 演示自定义回调</h3>
          <Loading visible={foo1Data.__loading} shape="fusion-reactor">
            <div>
              foo1 的值： {foo1Data.foo}
            </div>
          </Loading>
          {foo1Data.__error
            ?
            <Message type="error">
              foo1 数据获取失败，失败 message： {foo1Data.__error.message}
            </Message>
            :
            <Message>
              foo1 数据获取成功
            </Message>
          }
          <div style={{marginTop: 10}}>
            <Button onClick={this.refreshFoo1}>请求获取 foo1 新数据</Button>
          </div>
        </div>
        <div style={{marginTop: 30}}>
          <h3>foo2 接口有问题，会模拟网络请求 error</h3>
          <Loading visible={foo2Data.__loading} shape="fusion-reactor">
            <div>
              foo3 的值： {foo2Data.foo}
            </div>
          </Loading>
          {foo2Data.__error &&
            <Message type="error">
              foo1 数据获取失败，失败 message： {foo2Data.__error.message}
            </Message>
          }
          <div style={{marginTop: 10}}>
            <Button onClick={this.refreshFoo2}>请求获取 foo2 新数据</Button>
          </div>
        </div>
        <h3>当前页面是否有模块请求报错：{this.props.bindingData.__error ? '是' : '否'}，报错信息：{this.props.bindingData.__error && this.props.bindingData.__error.message}</h3>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
