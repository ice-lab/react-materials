module.exports = {
  'GET /api/profile': {
    status: 'SUCCESS',
    data: {
      name: '淘小宝',
      department: '技术部',
      avatar: 'https://img.alicdn.com/tfs/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png',
      userid: 10001,
      // 个人信息中返回当前用户的角色
      authority: 'user',
    },
  },

  'POST /api/login': (req, res) => {
    const { password, username } = req.body;
    if (username === 'admin' && password === 'admin') {
      res.send({
        status: 'SUCCESS',
        authority: 'admin',
      });
    } else if (username === 'user' && password === 'user') {
      res.send({
        status: 'SUCCESS',
        authority: 'user',
      });
    } else {
      res.send({
        status: 'FAIL',
        authority: 'guest',
        message: '用户名或者密码错误',
      });
    }
  },

  'POST /api/register': (req, res) => {
    res.send({
      status: 'SUCCESS',
      authority: 'user',
    });
  },

  'POST /api/logout': (req, res) => {
    res.send({
      status: 'SUCCESS',
      authority: 'guest',
    });
  },
};
