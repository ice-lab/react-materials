---
title: 回填 value
order: 4
---

回填 value 时，如果选中态用了其他字段，需要通过 `defaultDataSource` 字段指定默认数据

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CommonSelector from '@icedesign/common-selector';

class App extends Component {

  state = {
    value: ['45668']
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
        <CommonSelector
          value={this.state.value}
          defaultDataSource={[
            {
              value: '45668',
              label: '呵呵',
              img: 'https://img.alicdn.com/tfs/TB15.qVCFzqK1RjSZFoXXbfcXXa-80-80.png'
            }
          ]}
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
