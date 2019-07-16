import { useState } from 'react';
import axios from 'axios';
import { Message } from '@alifd/next';

export default function useRequest(options) {
  const [state, setState] = useState({
    response: null,
    loading: false,
    error: null
  });

  async function refetch(config) {
    let newState = {...state};

    try {
      Object.assign(newState, {
        loading: true
      });
      setState({...newState});

      const response = await axios({
        ...options,
        ...config,
      });

      Object.assign(newState, {
        response,
        loading: false,
      });

      const data = response.data;

      // 此处接口状态的字段可自定义
      if (data.status === 'SUCCESS') {
        setState({...newState});
        return newState;
      } else if (data.status === 'NOT_LOGIN') {
        // 处理未登录逻辑
        location.href = '';
      } else {
        const error = new Error(data.message || '后端接口异常');
        Object.assign(newState, {
          error
        });
        throw error;
      }
    } catch (error) {
      // 统一处理接口异常逻辑
      Message.show({
        type: 'error',
        title: '错误消息',
        content: error.message,
      });

      setState({...newState});
      throw error;
    }
  }

  return {
    ...state,
    refetch,
  };
}
