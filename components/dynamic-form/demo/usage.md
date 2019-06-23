---
title: demo
order: 99
---

本 Demo 演示一行文字的用法。

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormDynamic from '@ice/dynamic-form';
import { Button, Input } from '@alifd/next';

class DInput extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let {htmlType,onChange,value,tips,...props} = this.props 
    return <input
      onChange={onChange}
      value={value}
      type={htmlType}
      {...props} />
  }
}
const Components = {
  DInput,
  Button,
  Input
}

class App extends Component {
    render() {
        return (
            <div>
                <FormDynamic
                  layout={{
                    labelTextAlign: 'left'
                  }}
                  components={Components}
                  value={{
                    userName: "jack",
                    a: "32"
                  }}
                  config={[{
                      name: 'userName',
                      type: 'DInput',
                      label: '用户名',
                      rules: [{
                          required: true,
                          min: 5,
                          message: '用户名至少 5 个字符'
                      }],
                      props: {
                          style: {
                              width: '160px',
                          }
                      }
                  },{
                      name: 'userdesc',
                      type: 'Input',
                      label: '个性签名',
                      props: {
                          style: {
                              width: '160px',
                          }
                      }
                  }, {
                      name: 'password',
                      label: '密码',
                      type: 'Input',
                      tips: '<b>密码必须同时包含字母数字符号（提示支持 HTML 标签）</b>',
                      rules: [{
                          required: true,
                          min: 6,
                          message: "密码至少6位"
                      }],
                      props: {
                          htmlType: 'password',
                          // 支持自定义
                          style: {
                              width: '160px',
                              border: '2px solid green'
                          }
                      }
                  }, {
                    name: "a",
                    type: "DInput",
                    label: "输入值",
                    // 数组内为“且”还是“或”？
                    // linkages数组内的条件为 或 的逻辑

                    effects:[{
                      // conditions数组内的为 且 逻辑
                      conditions: [{
                        symbol: "===",
                        value: "32"
                      }],
                      // action 为数组，条件满足是并发
                      // show/hide/setValue
                      actions: [{
                        type: "show",
                        target: "b",
                        // value: "312"
                      }]
                     }]
                  },{
                    name: "b",
                    type: "DInput",
                    label: "test2",
                    // 初始化问题
                    visible: false,
                    props: {
                      // visible: false,
                    }
                  },{
                    name: "b3",
                    type: "DInput",
                    label: "sss",
                    display: "hide",
                    status: "view",
                    props: {
                      value: "332255"
                    }
                  },{
                    name: "c",
                    type: "DInput",
                    label: "test23",
                  },{
                    name: "d",
                    type: "DInput",
                    label: "test24",
                    display: "hide"
                  }]}
                  effects = {[{
                    event:{
                      origin: "c"
                    },
                    options: [{
                      conditions: [{
                        symbol: "===",
                        value: "32"
                      }],
                      // action 为数组，条件满足是并发
                      // show/hide/setValue
                      actions: [{
                        type: "show",
                        target: "d",
                        // value: "312"
                      }]
                    }]
                  }]}
                  buttons={[{
                      name: 'loginAction',
                      type: 'Button',
                      text: '登录（成功后跳转首页）',
                      actionEvent: 'submit',             
                      props: {
                        className: 'login-btn',
                        style: {
                            marginRight: '10px'
                        },
                        htmlType: 'submit'
                      }
                  }, {
                      name: 'resetAction',
                      text: '重置',
                      actionEvent: 'reset',
                  }]} />
            </div>
        );
    }
}

ReactDOM.render((
    <App />
), mountNode);
````
