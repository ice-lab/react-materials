const oss = require('ali-oss');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');
// const request = require('request');
const scaffolds = require('./scaffolds');

const bucket = 'iceworks';
const accessKeyId = process.env.ACCESS_KEY_ID;
const accessKeySecret = process.env.ACCESS_KEY_SECRET;
const dirPath = 'materials/';
const assetsPath = process.env.BRANCH_NAME === 'master' ? 'assets' : 'pre-assets'; // assets 正式
const rootDir = path.resolve(__dirname, '../');
const materialPath = path.resolve(rootDir, './build/materials.json');
const toPath = path.join(assetsPath, dirPath, 'react-common-materials.json');
const branchName = process.env.BRANCH_NAME;
const commitMessage = process.env.GIT_COMMIT_MESSAGE;

console.log('generate and upload, current branch', process.env.BRANCH_NAME);

(async () => {
  if (branchName !== 'master' && !/generate/.test(commitMessage)) {
    console.log('非 master 分支并且 commit message 不包含 generate，跳过此流程', branchName, commitMessage);
    return;
  }

  // 1. iceworks generate
  execSync('iceworks -V', {
    stdio: 'inherit',
    cwd: rootDir,
  });

  execSync('CONCURRENCY=5 LOG_LEVEL=verbose REGISTRY=https://registry.npmjs.org iceworks generate', {
    stdio: 'inherit',
    cwd: rootDir,
  });

  // scaffolds 排序
  await sortScaffoldMaterials();

  // 2. upload build/materials.json to oss
  const ossClient = oss({
    bucket,
    endpoint: 'oss-cn-hangzhou.aliyuncs.com',
    accessKeyId,
    accessKeySecret,
    timeout: '120s',
  });

  console.log('start upload oss', materialPath, toPath);
  const materialData = fs.readFileSync(materialPath, 'utf-8');
  const result = await ossClient.put(toPath, materialPath);
  console.log('upload oss success', result);

})().catch((err) => {
  console.error(err);
  process.exit(1);
});

/**
 * 按照下载量进行排序推荐
 */
function sortScaffoldMaterials() {
  return new Promise((resolve, reject) => {
    const materialsData = JSON.parse(fs.readFileSync(materialPath, 'utf-8'));

    const sortMaterialsData = [];
    scaffolds.forEach(scaffold => {
      materialsData.scaffolds.forEach(currentItem => {
        if (currentItem.source.npm === scaffold) {
          sortMaterialsData.push(currentItem);
        }
      });
    });

    materialsData.scaffolds = sortMaterialsData;

    return fs.writeFile(materialPath, JSON.stringify(materialsData, null, 2), 'utf-8', err => {
      if (err) reject(err);
      resolve();
    });
  });
}
