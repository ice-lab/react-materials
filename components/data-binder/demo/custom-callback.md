---
title: 自定义请求 callback
order: 5
---

自定义请求成功或者失败的处理逻辑：比如接口成功不弹出 toast

````jsx
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DataBinder from '@icedesign/data-binder';
import { Button, Loading, Message } from '@alifd/next';

@DataBinder({
  fooData: {
    url: 'https://www.easy-mock.com/mock/5cc669767a9a541c744c9be7/databinder/success',
    success: (body, defaultCallback, originResponse) => {
      if (body.status !== 'SUCCESS') {
        // 后端返回的状态码错误
        Message.error(body.message);
      } else {
        // // 成功不弹 toast，可以什么都不走
        console.log('success');
      }
    },
    // error 有两类错误，一类是网络中断，请求没有发送成功；另一类是服务器接口报错
    error: (originResponse, defaultCallback, err) => {
      // 失败弹 toast
      Message.error(err.message);
    },
    defaultBindingData: {
      foo: '默认值'
    }
  }
})
class App extends Component {
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
        <Loading visible={fooData.__loading} shape="fusion-reactor">
          <div>
            foo1 的值： {fooData.foo}
          </div>
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
