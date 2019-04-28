---
title: value 受控
order: 2
---

value 受控，同时通过 minx/max 指定个数

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
    return new Promise(function(resolve) {
      setTimeout(resolve, 1 * 1000);
    }).then(() => {
      return [{
        value: 1,
        label: inputValue,
      }, {
        value: 2,
        label: '222' + inputValue,
      }, {
        value: 3,
        label: '333' + inputValue,
      }];
    });
  }

  render() {
    return (
      <div>
        <MultiSelector
          min={1}
          max={2}
          value={this.state.value}
          fetchData={this.fetchData}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
