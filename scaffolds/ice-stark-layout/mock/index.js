// Refer to https://www.npmjs.com/package/webpack-dev-mock for detail configuration
module.exports = {
  'GET /api/profile': {
    status: 'SUCCESS',
    data: {
      name: '淘小宝',
      department: '技术部',
      avatar:
        'https://cdog01.alibaba-inc.com/aliwork/tUd4i7IDM8%2FuALhbY3H72kbPrqsVgoZ2GiVxZLXTfxB%2B91Z5dVJX5JSCGrUYBbnp?e=eIxQ5SR3%2BXODJpmDlfdb6A%3D%3D',
      userid: 10001,
    },
  },
};
