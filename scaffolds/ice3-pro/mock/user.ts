import type { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const waitTime = (time: number = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default {
  'POST /api/login': (req: Request, res: Response) => {
    bodyParser.json({ limit: '5mb', strict: false })(req, res, async () => {
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
    })
  },
  'GET /api/user': async (req: Request, res: Response) => {
    cookieParser()(req, res, async () => {
      const { cookies } = req;
      if (!cookies['ice_user_type']) {
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
        name: cookies['ice_user_type'] === 'admin' ? 'Admin' : 'User',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        userType: cookies['ice_user_type'],
      })
    })
  },
  'POST /api/logout': (req: Request, res: Response) => {
    res.send({ data: {}, success: true });
  },
}
