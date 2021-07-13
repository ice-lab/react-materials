import { execSync } from 'child_process';
import { join } from 'path';
import * as fse from 'fs-extra';
import globby from 'globby';

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
  const pkgData = await fse.readJSON(join(packageDir, 'package.json'));
  const { version, name } = pkgData;
  const npmTag = branchName === 'master' ? 'latest' : 'beta';

  const versionExist = await checkVersionExist(name, version, 'https://registry.npmjs.org/');
  if (versionExist) {
    console.log(`${name}@${version} 已存在，无需发布。`);
    return;
  }

  const isProdVersion = /^\d+\.\d+\.\d+$/.test(version);
  if (branchName === 'master' && !isProdVersion) {
    throw new Error(`禁止在 master 分支发布非正式版本 ${version}`);
  }

  if (branchName !== 'master' && isProdVersion) {
    console.log(`非 master 分支 ${branchName}，不发布正式版本 ${version}`);
    return;
  }

  console.log('start install deps');
  execSync('npm install', {
    cwd: packageDir,
    stdio: 'inherit',
  });

  console.log('start publish', version, npmTag);
  execSync(`npm publish --tag ${npmTag}`, {
    cwd: packageDir,
    stdio: 'inherit',
  });
}
