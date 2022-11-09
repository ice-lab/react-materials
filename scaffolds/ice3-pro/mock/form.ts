import type { Request, Response } from 'express';

export default {
  'POST /api/form/submit': (req: Request, res: Response) => {
    res.send({ data: {}, success: true });
  },
};
