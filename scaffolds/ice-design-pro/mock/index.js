module.exports = {
  'GET /api/profile': {
    status: 'SUCCESS',
    data: {
      name: '淘小宝',
      department: '技术部',
      avatar: 'https://img.alicdn.com/tfs/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png',
      userid: 10001,
    }
  },

  'POST /api/login': (req, res) => {
    const { password, username } = req.body;
    if (username === 'admin' && password === 'admin') {
      res.send({
        status: 'SUCCESS',
        statusText: 'ok',
        currentAuthority: 'admin',
      });
    } else if (username === 'user' && password === 'user') {
      res.send({
        status: 'SUCCESS',
        statusText: 'ok',
        currentAuthority: 'user',
      });
    } else {
      res.send({
        status: 'FAIL',
        statusText: 'unauthorized',
        currentAuthority: 'guest',
      });
    }
  },

  'POST /api/register': (req, res) => {
    res.send({
      status: 'SUCCESS',
      statusText: 'ok',
      currentAuthority: 'user',
    });
  },

  'POST /api/logout': (req, res) => {
    res.send({
      status: 'SUCCESS',
      statusText: 'ok',
      currentAuthority: 'guest',
    });
  },
};
