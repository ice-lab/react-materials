---
title: 简单用法
order: 1
---

简单用法

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MultiSelector from '@icedesign/multi-selector';

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
        <MultiSelector
          defaultValue={[1]}
          defaultDataSource={defaultDataSource}
          fetchData={this.fetchData}
          style={style}
        />

        <div>禁用状态</div>
        <MultiSelector
          disabled={true}
          defaultValue={[1]}
          defaultDataSource={defaultDataSource}
          fetchData={this.fetchData}
          style={style}
        />

        <div>不同 size</div>
        <MultiSelector
          size="large"
          defaultValue={[1]}
          defaultDataSource={defaultDataSource}
          fetchData={this.fetchData}
          style={style}
        />
        <MultiSelector
          size="medium"
          defaultValue={[1]}
          defaultDataSource={defaultDataSource}
          fetchData={this.fetchData}
          style={style}
        />
        <MultiSelector
          size="small"
          defaultValue={[1]}
          defaultDataSource={defaultDataSource}
          fetchData={this.fetchData}
          style={style}
        />

        <div>自定义宽度</div>
        <MultiSelector
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
