import { Router } from 'express';

import UserController from '@controllers/UserController';
import AuthController from '@controllers/AuthController';

const routes = Router();

routes.get('/', (req, res) => res.json({ message: 'Hello world' }));

routes.post('/api/user', UserController.store);
routes.post('/api/auth', AuthController.authenticate);

export default routes;
