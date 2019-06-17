import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

// Set baseUrl when debugging production url in dev mode
// axios.baseUrl = '//xxxx.taobao.com';

export default function request(opts) {
  const { type, url, ...resetParams } = opts;
  const params = {
    url: opts.url,
    ...resetParams,
  };
  if (type === 'jsonp') {
    params.adapter = jsonpAdapter;
  }

  return axios(params);
}
