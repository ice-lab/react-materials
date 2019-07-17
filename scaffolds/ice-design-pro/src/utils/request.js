import { useState } from 'react';
import axios from 'axios';
import { Message } from '@alifd/next';

// Set baseUrl when debugging production url in dev mode
// axios.baseUrl = '//xxxx.taobao.com';

/**
 * Custom response data handler logic (modify this as you need)
 * @param {object} response - response data returned by request
 * @return {object} data or error according to status code
 */
function onResponse(response) {
  const { data } = response;
  if (data.status === 'SUCCESS') {
    return { data };
  } else if (data.status === 'NOT_LOGIN') {
    location.href = '';
  } else {
    const error = new Error(data.message || '后端接口异常');
    return { error };
  }
}

/**
 * Display error message
 * @param {string} errorMessage - error message
 */
function showError(errorMessage) {
  Message.show({
    type: 'error',
    title: '错误消息',
    content: errorMessage,
  });
}

/**
 * Method to make ajax request
 * @param {object} options - axios config (https://github.com/axios/axios#request-config)
 * @return {object} response data
 */
export async function request(options) {
  try {
    const response = await axios(options);
    const { data, error } = onResponse(response);
    if (error) {
      throw error;
    } else {
      return { response, data };
    }
  } catch (error) {
    showError(error.message);
    console.error(error);
    throw err;
  }
}


/**
 * Hook to make ajax request
 * @param {object} options - axios config (https://github.com/axios/axios#request-config)
 * @return {object}
 *   @param {object} response - response of axios (https://github.com/axios/axios#response-schema)
 *   @param {object} error - HTTP or use defined error
 *   @param {boolean} loading - loading status of the request
 *   @param {function} refetch - function to make the request manually
 */
export function useRequest(options) {
  const [state, setState] = useState({
    response: null,
    loading: false,
    error: null
  });

  /**
   * Method to make request manually
   * @param {object} config - axios config to shallow merged with options before making request
   * @return {object}
   *   @param {object} response - response of axios (https://github.com/axios/axios#response-schema)
   *   @param {object} error - HTTP or use defined error
   *   @param {boolean} loading - loading status of the request
   */
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

      const { error } = onResponse(response);
      if (error) {
        Object.assign(newState, {
          error
        });
        throw error;
      } else {
        setState({...newState});
        return newState;
      }
    } catch (error) {
      showError(error.message);
      setState({...newState});
      throw error;
    }
  }

  return {
    ...state,
    refetch,
  };
}
