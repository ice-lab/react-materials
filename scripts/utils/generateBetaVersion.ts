import axios from 'axios';

const registry = 'https://registry.npmjs.org/';

export default async function generateBetaVersion(name, version) {
  try {
    const response = await axios.get(`${registry}${name}`);
    const { data } = response;
    const betaVersion = data['dist-tags'] && data['dist-tags'].beta;

    // 不存在 beta 版本或者不存在该正式版本的 beta 版本，以0为初始版本号
    if (!betaVersion || !new RegExp(`^${version}`).test(betaVersion)) {
      return `${version}-beta.0`;
    }

    // 匹配到 beta 数字版本，版本号 + 1
    const matchBeta = betaVersion.match(/\d+\.\d+\.\d+-beta\.(\d+)/);
    if (matchBeta) {
      return `${version}-beta.${parseInt(matchBeta[1], 10) + 1}`;
    }

    // 获取版本无法匹配 beta，走时间戳形式版本号进行兜底
    return `${version}-beta.${parseInt(String((new Date()).getTime() / 1000), 10)}`;
  } catch (err) {
    // 有可能是包还未发过
    console.error(err);
    return `${version}-beta.0`;
  }
}
