import { Router } from 'express';
import * as Controller from '../controllers/project.controller';
import Multer from '../libs/multer';

const router = Router();

router.post('/newProject', Multer.array('image'), Controller.CreateProject);
router.put('/updateProject/:id', Controller.UpdateProject);
router.delete('/deleteProject/:id', Controller.DeleteProject);
router.post('/findProject/:id', Controller.FindProject);
router.get('/readProjects', Controller.ReadProjects);

router.get('/projects', Controller.ReadProjects);

export default router;
