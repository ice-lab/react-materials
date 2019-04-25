# react-materials

飞冰（ICE）官方 React 物料（模板/区块/组件），基于 Fusion 组件和 ice-scripts 工程工具。

## 使用

对应的物料数据：`https://ice.alicdn.com/assets/react-materials.json`，可以通过 Iceworks 的自定义物料功能使用。

## 如何贡献

- Fork 仓库，修改代码
- 提交 PR

## 开发指南

### 环境准备

```bash
# 物料管理工具
$ npm i -g ice-devtools
$ idev -V

# React 物料开发工具
$ npm i -g ice-scripts
$ ice -V
```

### 新增物料

```bash
$ cd react-materials
$ idev add
```

### 开发调试

```bash
$ cd blocks/Example
$ npm install
$ npm run start
$ npm run build
```

### 相关链接

- [issue 反馈](https://github.com/alibaba/ice/issues/new)
- [ice-devtools](https://ice.work/docs/advanced/custom-materials)
- [Fusion 组件](https://fusion.design/)
- [ice-scripts](https://ice.work/docs/basis/ice-scripts)

## License

[MIT](LICENSE)