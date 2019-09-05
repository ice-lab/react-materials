module.exports = {
  'GET /api/profile': {
    status: 'SUCCESS',
    data: {
      name: '淘小宝',
      department: '技术部',
      avatar: 'https://img.alicdn.com/tfs/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png',
      userid: 10001,
    },
  },

  'POST /api/login': (req, res) => {
    const { password, username } = req.body;
    const responseData = {
      status: '',
      authority: 'guest',
    };
    if (username === 'admin' && password === 'admin') {
      responseData.status = 'SUCCESS';
      responseData.authority = 'admin';
    } else if (username === 'user' && password === 'user') {
      responseData.status = 'SUCCESS';
      responseData.authority = 'user';
    } else {
      responseData.status = 'FAIL';
      responseData.authority = 'guest';
      responseData.message = '用户名或者密码错误';
    }
    res.cookie('authority', responseData.authority);
    res.send(responseData);
  },

  'POST /api/register': (req, res) => {
    res.cookie('authority', 'user');
    res.send({
      status: 'SUCCESS',
    });
  },

  'POST /api/logout': (req, res) => {
    res.cookie('authority', '');
    res.send({
      status: 'SUCCESS',
    });
  },

  'GET /api/menu': {
    status: 'SUCCESS',
    list: [
      {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'home2',
        children: [
          {
            name: 'monitor',
            path: '/dashboard/monitor',
          },
        ],
      },
      {
        name: 'chart',
        path: '/chart',
        icon: 'chart',
        // authorities: ['admin'],
        children: [
          {
            name: 'basic',
            path: '/chart/basic',
          },
          {
            name: 'general',
            path: '/chart/general',
          },
        ],
      },
    ],
  },
};
