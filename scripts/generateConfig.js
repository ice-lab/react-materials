const fs = require('fs');

const scaffoldDir = './scaffolds';
const scaffolds = fs.readdirSync(scaffoldDir);

scaffolds.forEach((scaffold) => {
  const oldMenuConfigPath = `${scaffoldDir}/${scaffold}/src/menuConfig.js`;
  const oldRouterConfigPath = `${scaffoldDir}/${scaffold}/src/routerConfig.js`;
  const newMenuConfigPath = `${scaffoldDir}/${scaffold}/src/config/menu.js`;
  const newRouterConfigPath = `${scaffoldDir}/${scaffold}/src/config/routes.js`;

  fs.mkdirSync(`${scaffoldDir}/${scaffold}/src/config`);
  fs.rename(oldMenuConfigPath, newMenuConfigPath);
  fs.rename(oldRouterConfigPath, newRouterConfigPath);
});