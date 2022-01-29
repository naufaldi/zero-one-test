import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (!req.body) {
    res.statusCode = 404;
    res.end('Error');
    return;
  }
  const { email, password } = req.body;
  //  dummy function check email and password as admin
  if (email === 'admin@evelope.com' && password === 'admin') {
    res.statusCode = 200;
    res.json({
      message: 'Login Success',
    });
  } else {
    res.statusCode = 401;
    res.json({
      message: 'Login Failed',
    });
  }
}
