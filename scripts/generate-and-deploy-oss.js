const oss = require('ali-oss');
const path = require('path');
const fs = require('fs-extra');
const { execSync } = require('child_process');

const bucket = 'iceworks';
const accessKeyId = process.env.ACCESS_KEY_ID;
const accessKeySecret = process.env.ACCESS_KEY_SECRET;
const dirPath = 'materials/';
const assetsPath = process.env.BRANCH_NAME === 'master' ? 'assets' : 'pre-assets'; // assets 正式
const rootDir = path.resolve(__dirname, '../');
const materialPath = path.resolve(rootDir, './build/materials.json');
const toPath = path.join(assetsPath, dirPath, 'react-materials.json');
const branchName = process.env.BRANCH_NAME;
const commitMessage = process.env.GIT_COMMIT_MESSAGE;
// scaffolds 排序
const sortedScaffoldsNames = [
  '@alifd/scaffold-simple',
  '@icedesign/ice-antd-scaffold',

  '@alifd/scaffold-lite',
  '@alifd/fusion-design-pro',

  '@icedesign/stark-layout-scaffold',
  '@icedesign/stark-child-scaffold',

  // '@icedesign/scaffold-midway-faas',
];

const sleep = async (t) => {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
};

console.log('generate and upload, current branch', process.env.BRANCH_NAME);

(async () => {
  if (branchName !== 'master' && !/trigger generate/.test(commitMessage)) {
    console.log('非 master 分支并且 commit message 不包含 generate，跳过此流程', branchName, commitMessage);
    return;
  }

  // 1. iceworks generate
  execSync('iceworks -V', {
    stdio: 'inherit',
    cwd: rootDir,
  });

  // 防止 npm 发包同步有延时
  await sleep(1 * 60 * 1000);

  execSync('CONCURRENCY=5 LOG_LEVEL=verbose REGISTRY=https://registry.npmjs.org iceworks generate', {
    stdio: 'inherit',
    cwd: rootDir,
  });

  const materialData = fs.readJSONSync(materialPath, 'utf-8');
  // scaffolds 手动排序
  materialData.scaffolds = sortedScaffoldsNames.map(name => {
    return materialData.scaffolds.find(item => item.source.npm === name);
  });

  // TODO: 暂时先保留原先 fusion 的 blocks，后面再重新梳理这块
  const { blocks } = fs.readJSONSync(path.join(__dirname, 'fusion-blocks-data.json'), 'utf-8');
  materialData.blocks = blocks.map(item => {
    item.componentType = 'fusion';
    item.dependencies['@alifd/next'] = '1.x';
    return item;
  });
  // TODO: 暂时先保留原先 antd 的 blocks，后面再重新梳理这块
  const { blocks: antdBlocks } = fs.readJSONSync(path.join(__dirname, 'antd-blocks-data.json'), 'utf-8');
  materialData.blocks = materialData.blocks.concat(antdBlocks.map(item => {
    item.componentType = 'antd';
    item.dependencies.antd = '4.x';
    return item;
  }));

  fs.writeJSONSync(materialPath, materialData);

  // 2. upload build/materials.json to oss
  const ossClient = oss({
    bucket,
    endpoint: 'oss-cn-hangzhou.aliyuncs.com',
    accessKeyId,
    accessKeySecret,
    timeout: '120s',
  });

  console.log('start upload oss', materialPath, toPath);
  const result = await ossClient.put(toPath, materialPath);
  console.log('upload oss success', result);

})().catch((err) => {
  console.error(err);
  process.exit(1);
});