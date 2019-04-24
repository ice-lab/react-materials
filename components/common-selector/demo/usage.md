---
title: Simple Usage
order: 1
---

本 Demo 演示一行文字的用法。

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CommonSelector from '@icedesign/common-selector';

function later(delay) {
  return new Promise(function(resolve) {
    setTimeout(resolve, delay);
  });
}

class App extends Component {

  state = {
    value: []
  }

  onChange = (value) => {
    this.setState({value});
  }

  fetchData = ({ inputValue }) => {
    return later(0.3 * 1000).then(() => {
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
    const commonProps = {
      value: this.state.value,
      onChange: this.onChange,
      fetchData: this.fetchData,
      renderOption: (item) => {
        return (
          <span>{item.label}-{item.value}</span>
        );
      },
      getFillValue: (item) => {
        return `${item.value}-${item.label}`;
      },
      style: {
        margin: '10px 0',
      },
    };

    return (
      <div>
        <div>不同 size：</div>
        <CommonSelector
          {...commonProps}
          size="small"
        />

        <CommonSelector
          {...commonProps}
          size="medium"
        />

        <CommonSelector
          {...commonProps}
          size="large"
        />

        <div>Focus 时显示下拉列表：</div>
        <CommonSelector
          {...commonProps}
          isFocusShow
        />

        <div>自定义宽度：</div>
        <CommonSelector
          {...commonProps}
          width={500}
        />

        <div>自定义 placeholder：</div>
        <CommonSelector
          {...commonProps}
          placeholder="来搜索搜索吧"
        />

        <div>禁用状态：</div>
        <CommonSelector
          {...commonProps}
          disabled={true}
        />

        <div>接口出错状态：</div>
        <CommonSelector
          {...commonProps}
          fetchData={({ inputValue }) => {
            return later(0.3 * 1000).then(() => {
              return Promise.reject(new Error(
                `接口出错啦 <a href="https://example.com" target="blank">查看错误</a>`
              ));
            });
          }}
        />
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
