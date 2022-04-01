import { Router } from 'express'

import UserController from '../app/controllers/UserController';
import SkillController from '../app/controllers/SkillController';

import authMiddleware from '../app/middlewares/auth';



const routes = Router();

routes.get('/users', UserController.index);
routes.get('/skills', SkillController.index);
routes.get('/skills/:skill_id', SkillController.show);

routes.get('/', (req, res)=>{return res.status(200).json({msg: 'Starting Torre...'});});









export default routes;