// Refer to https://www.npmjs.com/package/webpack-dev-mock for detail configuration
module.exports = {
  '/api/project/list': {
    status: 'SUCCESS',
    message: '请求成功',
    data: {
      total: 50,
      dataSource: [
        {
          id: 1,
          title: '哈哈',
          author: '呵呵'
        }
      ]
    }
  },
  '/api/project/detail': (req, res) => {
    const { id } = req.query;
    res.send({
      status: 'SUCCESS',
      message: '请求成功',
      data: {
        id,
        title: '哈哈',
        author: '呵呵'
      }
    });
  }
};
