import axios from 'axios';
import { Message } from '@alifd/next';

// Set baseUrl when debugging production url in dev mode
// axios.baseUrl = '//xxxx.taobao.com';

export default async function request(options) {
  try {
    const response = await axios(options);
    const data = response.data;
    if (data.status === 'SUCCESS') {
      return { response, data };
    } else if (data.status === 'NOT_LOGIN') {
      // 处理未登录逻辑
      location.href = '';
    } else {
      throw new Error(data.message || '后端接口异常');
    }
  } catch (err) {
    // 统一处理接口异常逻辑
    Message.show({
      type: 'error',
      title: '错误消息',
      content: err.message,
    });
    console.error(err);
    throw err;
  }
}
