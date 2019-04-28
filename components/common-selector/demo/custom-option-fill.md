---
title: 自定义渲染
order: 3
---

通过 `renderOption` 属性可以自定义下拉列表选项渲染；通过 `getFillValue` 可以自定义选中态渲染的字符串。

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MultiSelector from '@icedesign/multi-selector';

class App extends Component {

  state = {
    value: []
  }

  onChange = (value) => {
    this.setState({value});
  }

  fetchData = ({ inputValue }) => {
    return Promise.resolve(
      [{
        value: '23678',
        label: '哈哈',
        img: 'https://img.alicdn.com/tfs/TB1gOdQRCrqK1RjSZK9XXXyypXa-192-192.png'
      }, {
        value: '45668',
        label: '呵呵',
        img: 'https://img.alicdn.com/tfs/TB15.qVCFzqK1RjSZFoXXbfcXXa-80-80.png'
      }]
    );
  }

  render() {
    return (
      <div>
        <MultiSelector
          value={this.state.value}
          fetchData={this.fetchData}
          onChange={this.onChange}
          renderOption={(item) => {
            return (
              <div style={{
                display: 'flex',
                alignItems: 'center',
              }}>
                <img src={item.img} width={20} height={20}
                 />
                <span>{item.label}</span>
              </div>
            )
          }}
          getFillValue={(item) => {
            return item.value;
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
