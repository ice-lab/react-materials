import { Request, Response } from 'express';

const waitTime = (time: number = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default {
  'POST /api/login': async (req: Request, res: Response) => {
    const { username, password } = req.body;
    await waitTime();
    if (username === 'admin' && password === 'ice') {
      res.send({
        success: true,
        userType: 'admin',
      });
      return;
    }
    if (username === 'user' && password === 'ice') {
      res.send({
        success: true,
        userType: 'user',
      });
      return;
    }

    res.send({
      success: false,
      userType: 'guest',
    });
  },
  'GET /api/user': async (req: Request, res: Response) => {
    const { query } = req;
    if (!query.userType) {
      res.status(401).send({
        data: {
          isLogin: false,
        },
        errorCode: '401',
        errorMessage: '请先登录！',
        success: true,
      })
      return;
    }
    res.send({
      name: query.userType === 'admin' ? 'Admin' : 'User',
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      userid: '00000001',
    })
  },
}
