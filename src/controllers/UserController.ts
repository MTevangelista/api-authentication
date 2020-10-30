import User from '@models/User';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

class UserController {
  public async store(req: Request, res: Response): Promise<Response> {
    const repository = getRepository(User);
    const { email, password } = req.body;

    const userExists = await repository.findOne({ where: { email } });

    if (userExists) {
      return res.status(409).json({ message: 'user already exists' });
    }

    const user = repository.create({ email, password });

    await repository.save(user);

    return res.status(201).json(user);
  }
}

export default new UserController();
