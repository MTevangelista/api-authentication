import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload {
  id: string
  iat: number
  exp: number
}

export default async function authMiddleware(
  req: Request, res: Response, next: NextFunction,
): Promise<void | Response> {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token is required' });
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, process.env.APP_SECRET);
    const { id } = data as TokenPayload;
    req.userId = id;
    return next();
  } catch {
    return res.status(401).json({ message: 'Token invalid!' });
  }
}
