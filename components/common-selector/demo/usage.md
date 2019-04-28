---
title: 简单用法
order: 1
---

简单用法

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CommonSelector from '@icedesign/common-selector';

class App extends Component {
  fetchData = ({ inputValue }) => {
    return new Promise(function(resolve) {
      setTimeout(resolve, 1 * 1000);
    }).then(() => {
      return [{
        value: 1,
        label: inputValue,
      }, {
        value: 2,
        label: '222' + inputValue,
      }];
    });
  }

  render() {
    const style = {
      margin: '10px 0'
    };
    const defaultDataSource = [{
      value: 1,
      label: '1111',
    }];

    return (
      <div>
        <CommonSelector
          defaultValue={[1]}
          defaultDataSource={defaultDataSource}
          fetchData={this.fetchData}
          style={style}
        />

        <div>禁用状态</div>
        <CommonSelector
          disabled={true}
          defaultValue={[1]}
          defaultDataSource={defaultDataSource}
          fetchData={this.fetchData}
          style={style}
        />

        <div>不同 size</div>
        <CommonSelector
          size="large"
          defaultValue={[1]}
          defaultDataSource={defaultDataSource}
          fetchData={this.fetchData}
          style={style}
        />
        <CommonSelector
          size="medium"
          defaultValue={[1]}
          defaultDataSource={defaultDataSource}
          fetchData={this.fetchData}
          style={style}
        />
        <CommonSelector
          size="small"
          defaultValue={[1]}
          defaultDataSource={defaultDataSource}
          fetchData={this.fetchData}
          style={style}
        />

        <div>自定义宽度</div>
        <CommonSelector
          width={500}
          defaultValue={[1]}
          defaultDataSource={defaultDataSource}
          fetchData={this.fetchData}
          style={style}
        />
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
