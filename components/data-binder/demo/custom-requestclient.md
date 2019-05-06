---
title: 自定义请求客户端
order: 5
---

本 Demo 演示自定义 requestClient：使用 jsonp 的方法发送请求，自定义的 requestClien 必须返回一个 Promise

````jsx
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import querystring from 'querystring';
import DataBinder from '@icedesign/data-binder';
import jsonp from 'jsonp';
import { Button, Loading } from '@alifd/next';

/**
 * 自定义的 json request client
 */
function request(opts) {
  return new Promise((resolve, reject) => {
    jsonp(opts.url + '?' + querystring.encode(opts.params), {
      name: 'callback'
    }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve({ data });
      }
    })
  });
}

@DataBinder({
  fooData: {
    url: 'https://sug.so.360.cn/suggest',
    defaultBindingData: {
      q: '默认值'
    },
    responseFormatter: (responseHandler, body, response) => {
      const newBody = {
        success: 'SUCCESS',
        message: 'ok',
        data: body
      };
      responseHandler(newBody, response);
    },
  }
}, { requestClient: request })
class App extends Component {
  refreshFoo = () => {
    this.props.updateBindingData('fooData', {
      params: {
        word: 'test'
      }
    });
  };

  render() {
    const {fooData} = this.props.bindingData;

    return (
      <div>
        <Loading visible={fooData.__loading}>
          foo 的值： {fooData.q}
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
