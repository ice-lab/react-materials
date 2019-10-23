import { useReducer } from 'react';
import axios from 'axios';
import { Message } from '@alifd/next';

// Set baseURL when debugging production url in dev mode
// axios.defaults.baseURL = '//xxxx.taobao.com';

/**
 * Method to make ajax request
 *
 * @param {object} options - axios config (https://github.com/axios/axios#request-config)
 * @return {object} response data
 */
export async function request(options) {
  try {
    const response = await axios(options);
    const { data, error } = handleResponse(response);
    if (error) {
      throw error;
    } else {
      return { response, data };
    }
  } catch (error) {
    showError(error.message);
    console.error(error);
    throw error;
  }
}


/**
 * Hooks to make ajax request
 *
 * @param {object} options - axios config (https://github.com/axios/axios#request-config)
 * @return {object}
 *   @param {object} response - response of axios (https://github.com/axios/axios#response-schema)
 *   @param {object} error - HTTP or use defined error
 *   @param {boolean} loading - loading status of the request
 *   @param {function} request - function to make the request manually
 */
export function useRequest(options) {
  const initialState = {
    response: null,
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(requestReducer, initialState);

  /**
   * Method to make request manually
   * @param {object} config - axios config to shallow merged with options before making request
   */
  async function request(config) {
    try {
      dispatch({
        type: 'init',
      });

      const response = await axios({
        ...options,
        ...config,
      });

      const { data, error } = handleResponse(response);

      if (error) {
        throw error;
      } else {
        dispatch({
          type: 'success',
          response,
        });
        return { response, data };
      }
    } catch (error) {
      showError(error.message);
      dispatch({
        type: 'error',
        error,
      });
      throw error;
    }
  }

  return {
    ...state,
    request,
  };
}

/**
 * Reducer to handle the status of the request
 * @param {object} state - original status
 * @param {object} action - action of dispatch
 * @return {object} new status
 */
function requestReducer(state, action) {
  switch (action.type) {
    case 'init':
      return {
        response: null,
        error: null,
        loading: true,
      };
    case 'success':
      return {
        response: action.response,
        error: null,
        loading: false,
      };
    case 'error':
      return {
        response: null,
        error: action.error,
        loading: false,
      };
    default:
      return {
        response: null,
        error: null,
        loading: false,
      };
  }
}

/**
 * Custom response data handler logic
 *
 * @param {object} response - response data returned by request
 * @return {object} data or error according to status code
 */
function handleResponse(response) {
  const { data } = response;
  // Please modify the status key according to your business logic
  // normally the key is `status` or `code`
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
 *
 * @param {string} errorMessage - error message
 */
function showError(errorMessage) {
  Message.show({
    type: 'error',
    title: '错误消息',
    content: errorMessage,
  });
}

