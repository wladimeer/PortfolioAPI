import ProjectRoutes from './routes/project.routes';
import express from 'express';
import config from './config';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

app.set('port', config.MONGO_PORT || 3000);
app.use('/uploads', express.static(path.resolve('uploads')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(ProjectRoutes);
app.use(morgan('dev'));
app.use(cors());

export default app;
