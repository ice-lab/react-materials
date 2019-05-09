---
title: 自定义 DataBinder
order: 6
---

很多场景下，我们会遇到诸如以下 case：

- 业务接口规范跟 DataBinder 默认规范不一致
- 需要全局处理接口通用规范，比如：未登录、无权限、出错等
- 业务上使用非 AJAX 的方式做前后端通信，比如：jsonp

这些场景我们建议业务上对 DataBinder 包装一层，产出业务自身的一个 DataBinder。

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DataBinder from '@icedesign/data-binder';
import { Button, Loading, Message } from '@alifd/next';

/**
 * 自定义一个 DataBinder，建议放在 src/components/DataBinder 下。支持以下特性：
 *   - 通过 showSuccessToast/showErrorToast 配置是否要弹 toast
 *   - 通过 responseFormatter 格式化后端接口
 *   - 基于 responseFormatter 实现未登录、无权限等逻辑
 */
const CustomDataBinder = (options) => {
  // 重组 options
  let newOptions = {};

  Object.keys(options).forEach(dataSourceKey => {
    const config = options[dataSourceKey];
    const { showErrorToast = true, showSuccessToast = false } = config;

    newOptions[dataSourceKey] = {
      ...config,
      responseFormatter: (responseHandler, body, response) => {
        if (body.code === '-1') {
          // 未登录
          Message.error('未登录，即将跳转到登录页面');
          // location.reload();
          return;
        }

        if (body.code === '-2') {
          // 无权限
          Message.error('无权限，即将跳转无权限页面');
          // location.reload();
          return;
        }

        const newBody = {
          status: body.code === '0' ? 'SUCCESS' : 'ERROR',
          message: body.msg,
          data: body.content || {}
        };
        responseHandler(newBody, response);
      },
      success: (body, defaultCallback, originResponse) => {
        const {config} = originResponse;

        if (body.status !== 'SUCCESS') {
          // 后端返回的状态码错误
          if (config.showErrorToast) {
            Message.error(body.message);
          }
        } else {
          if (config.showSuccessToast) {
            Message.success(body.message);
          }
        }
      },
      error: (originResponse, defaultCallback, err) => {
        // 网络异常：404，302 等
        const {config} = originResponse;
        if (config.showErrorToast) {
          Message.error(err.message);
        }
      }
    };
  });

  return DataBinder.call(this, newOptions);
};

@CustomDataBinder({
  successData: {
    url:
      'https://www.easy-mock.com/mock/5cc669767a9a541c744c9be7/databinder/ok',
    showSuccessToast: false
  },
  errorData: {
    url:
      'https://www.easy-mock.com/mock/5cc669767a9a541c744c9be7/databinder/error',
    showErrorToast: true
  },
  networkErrorData: {
    url:
      'https://www.easy-mock.com/mock/5cc669767a9a541c744c9be7/databinder/errorssss',
    showErrorToast: false
  },
  notLogin: {
    url:
      'https://www.easy-mock.com/mock/5cc669767a9a541c744c9be7/databinder/not-login'
  },
  noAuth: {
    url:
      'https://www.easy-mock.com/mock/5cc669767a9a541c744c9be7/databinder/no-auth'
  }
})
class App extends Component {
  updateData = key => {
    this.props.updateBindingData(key);
  };

  render() {
    const { successData, errorData, notLogin, noAuth, networkErrorData } = this.props.bindingData;

    const itemStyle = {
      margin: '10px 0',
      boderBottom: '1px solid #999',
    };

    return (
      <div>
        <div style={itemStyle}>
          <div>请求成功不弹 toast</div>
          <Loading visible={successData.__loading}>
            foo 的值： {successData.foo}
          </Loading>
          <div style={{ marginTop: 10 }}>
            <Button onClick={this.updateData.bind(this, 'successData')}>
              获取新数据
            </Button>
          </div>
        </div>
        <div style={itemStyle}>
          <div>请求失败弹 toast</div>
          <Loading visible={errorData.__loading}>
            Error： {errorData.__error && errorData.__error.message}
          </Loading>
          <div style={{ marginTop: 10 }}>
            <Button onClick={this.updateData.bind(this, 'errorData')}>
              获取新数据
            </Button>
          </div>
        </div>
        <div style={itemStyle}>
          <div>请求失败不弹 toast</div>
          <Loading visible={networkErrorData.__loading}>
            Error： {networkErrorData.__error && networkErrorData.__error.message}
          </Loading>
          <div style={{ marginTop: 10 }}>
            <Button onClick={this.updateData.bind(this, 'networkErrorData')}>
              获取新数据
            </Button>
          </div>
        </div>
        <div style={itemStyle}>
          <div>请求未登录</div>
          <Loading visible={notLogin.__loading}>
            foo 的值： {notLogin.foo}
          </Loading>
          <div style={{ marginTop: 10 }}>
            <Button onClick={this.updateData.bind(this, 'notLogin')}>
              获取新数据
            </Button>
          </div>
        </div>
        <div style={itemStyle}>
          <div>请求无权限</div>
          <Loading visible={noAuth.__loading}>foo 的值： {noAuth.foo}</Loading>
          <div style={{ marginTop: 10 }}>
            <Button onClick={this.updateData.bind(this, 'noAuth')}>
              获取新数据
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````
