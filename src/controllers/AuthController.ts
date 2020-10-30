import User from '@models/User';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class AuthController {
  public async authenticate(req: Request, res: Response): Promise<Response> {
    const repository = getRepository(User);
    const { email, password } = req.body;

    const user = await repository.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'user not found' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid user or password' });
    }

    const token = jwt.sign({ id: user.id }, process.env.APP_SECRET, { expiresIn: '1d' });

    delete user.password;

    return res.json({
      user,
      token,
    });
  }
}

export default new AuthController();
