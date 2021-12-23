const { join } = require('path');

module.exports = {
  vite: true,
  plugins: [
    [
      "build-plugin-ignore-style",
      {
        libraryName: "antd"
      }
    ],
    join(__dirname, 'build.plugin.js'),
  ]
}