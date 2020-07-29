import {Router} from 'express'

const router = Router();

import { createTask} from '../controllers/taskController'

router.post('/',createTask);

export default router;


