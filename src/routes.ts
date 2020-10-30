import { Router } from 'express';

import UserController from '@controllers/UserController';

const routes = Router();

routes.get('/', (req, res) => res.json({ message: 'Hello world' }));

routes.post('/api/user', UserController.store);

export default routes;
