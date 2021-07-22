import { execSync } from 'child_process';
import { join } from 'path';
import * as fse from 'fs-extra';
import globby from 'globby';
import * as generateBetaVersion from './utils/generateBetaVersion';

import checkVersionExist from './checkVersionExist';

const branchName = process.env.BRANCH_NAME;
const rootDir = join(__dirname, '../');

if (!branchName) {
  throw new Error('Only support publish in GitHub Actions env');
}

(async () => {
  // ['scaffolds/ant-design-lite/package.json']
  const packages = await globby([
    'scaffolds/*/package.json',
    'blocks/*/package.json',
    'components/*/package.json',
  ], {
    cwd: rootDir,
  });

  for (const pkg of packages) {
    // eslint-disable-next-line no-await-in-loop
    await publishPackage(join(rootDir, pkg, '../'));
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});

async function publishPackage(packageDir: string): Promise<void> {
  const pkgPath = join(packageDir, 'package.json');
  const pkgData = await fse.readJSON(pkgPath);
  const { version, name } = pkgData;
  let publishVersion = version;

  const npmTag = branchName === 'master' ? 'latest' : 'beta';

  if (version === 'latest') {
    return;
  }

  const versionExist = await checkVersionExist(name, version, 'https://registry.npmjs.org/');
  if (versionExist) {
    console.log(`${name}@${version} 已存在，无需发布。`);
    return;
  }

  const isProdVersion = /^\d+\.\d+\.\d+$/.test(version);
  if (branchName === 'master' && !isProdVersion) {
    throw new Error(`禁止在 master 分支发布非正式版本 ${version} ${name}`);
  }

  if (branchName !== 'master' && isProdVersion) {
    publishVersion = await generateBetaVersion(name, version);
    pkgData.version = publishVersion;

    console.log(`非 master 分支 ${branchName}，自动生成 beta 版本号 ${name} ${publishVersion} ${version}`);
    fse.writeJSONSync(pkgPath, pkgData);
  }

  console.log('start install deps', name);
  execSync('npm install', {
    cwd: packageDir,
    stdio: 'inherit',
  });

  console.log('start publish', publishVersion, npmTag);
  execSync(`npm publish --tag ${npmTag}`, {
    cwd: packageDir,
    stdio: 'inherit',
  });
}
