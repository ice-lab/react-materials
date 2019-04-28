---
title: 自定义 fetch 出错信息
order: 5
---

自定义 fetch 出错信息

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CommonSelector from '@icedesign/common-selector';

class App extends Component {
  fetchData = ({ inputValue }) => {
    return Promise.reject(new Error(
      '接口报错了，请参考 <a target="_blank" href="/">文档</a> 进行修复'
    ));
  }

  render() {
    return (
      <div>
        <CommonSelector
          fetchData={this.fetchData}
        />
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
