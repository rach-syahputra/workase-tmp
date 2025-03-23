import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';

import { JWT_ACCESS_SECRET } from '@/config';
import { ResponseError } from '@/helpers/error';
import { UserRequest, UserToken } from '@/interfaces/users/user.interface';

export function verifyToken(
  req: UserRequest,
  res: Response,
  next: NextFunction,
) {
  try {
    const { authorization } = req.headers;
    const token = String(authorization || '').split('Bearer ')[1];
    if (!token) throw new ResponseError(401, 'Unauthorized.');

    const verifiedUser = jwt.verify(token, JWT_ACCESS_SECRET);
    if (!verifiedUser) throw new ResponseError(401, 'Unauthorized.');

    req.user = verifiedUser as UserToken;

    next();
  } catch (err) {
    next(err);
  }
}
