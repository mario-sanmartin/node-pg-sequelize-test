import express,{json} from 'express';
import morgan from 'morgan'


//Importando routes
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';



//Iniciaización
const app = express();


//middlewares
app.use(morgan('dev'));
app.use(json());

//Rutas
app.use('/api/projects',projectRoutes);
app.use('/api/tasks',taskRoutes);


export default app;