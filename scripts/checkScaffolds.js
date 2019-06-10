/**
 * check scaffolds build/index.html success
 */

const glob = require('glob');
// const fse = require('fs-extra');
const path = require('path');
// const { execSync } = require('child_process');
const request = require('request-promise');

const dir = path.resolve(__dirname, '../scaffolds');
const pattern = '*/package.json';
const files = glob.sync(pattern, {
  cwd: dir,
});

files.forEach((item) => {
  // const dirname = item.split('/')[0];
  // const dirpath = path.resolve(dir, dirname);
  const pkgPath = path.resolve(dir, item);
  // eslint-disable-next-line import/no-dynamic-require
  const pkgData = require(pkgPath);

  const { name: npmName, version } = pkgData;
  const url = `https://unpkg.com/${npmName}@${version}/build/index.html`;

  // if (pkgData.themeConfig || pkgData.buildConfig) {
  //   console.log('err', npmName);
  // }

  request({
    url,
    resolveWithFullResponse: true,
  })
    .then((response) => {
      if (response.statusCode === 200) {
        console.log('success', url);
      } else {
        console.log('error', url, response.statusCode);
      }
    })
    .catch(() => {
      console.error('error', url);
    });
});
