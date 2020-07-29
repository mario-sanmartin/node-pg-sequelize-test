import {Router} from 'express'
const router = Router();

import {createProject, getProyects,getProyectByID,deleteProyect,updateProyect} from '../controllers/projectController';

router.post('/',createProject); //crear un proyecto
router.get('/',getProyects); //mostrar todos los proyectos

router.get('/:id',getProyectByID)
router.delete('/:id',deleteProyect)
router.put('/:id',updateProyect)

export default router;


