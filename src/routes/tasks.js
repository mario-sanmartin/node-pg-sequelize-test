import {Router} from 'express'

const router = Router();

import { createTask,getTasks,getTaskById,updateTask,deleteTask,getTaskByProject} from '../controllers/taskController'

//api/tasks
router.post('/',createTask);
router.get('/',getTasks)


//api/tasks/:id
router.get('/:id',getTaskById)
router.put('/:id',updateTask)
router.delete('/:id',deleteTask)


//api/tasks/project/:projectid
router.get('/project/:projectid',getTaskByProject)
export default router;


