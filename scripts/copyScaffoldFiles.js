/**
 * copy template files
 */

const fs = require('fs');

const removeFiles = ['_eslintrc', '_eslintignore', '_editorconfig', '.eslintrc', '.eslintignore', '.editorconfig'];
const scaffoldDir = './scaffolds';
const templateDir = './scripts/templates';
const scaffolds = fs.readdirSync(scaffoldDir);
const templateFiles = fs.readdirSync(templateDir);

scaffolds.forEach((scaffold) => {
  removeFiles.forEach((file) => {
    const removeFilePath = `${scaffoldDir}/${scaffold}/${file}`;
    try {
      const stats = fs.statSync(removeFilePath);
      if (stats.isFile()) {
        fs.unlinkSync(removeFilePath);
      }
    } catch (error) {
      console.log('can not find file');
    }
  });
  templateFiles.forEach((templateFile) => {
    fs.createReadStream(`${templateDir}/${templateFile}`).pipe(fs.createWriteStream(`${scaffoldDir}/${scaffold}/${templateFile}`));
  });
});
