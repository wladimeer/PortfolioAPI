import dotenv from 'dotenv';

dotenv.config();

export default {
  MONGO_HOST: process.env.MONGO_HOST || 'localhost',
  MONGO_DATABASE: process.env.MONGO_DATABASE || 'project',
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
  MONGO_USER: process.env.MONGO_USER || 'admin',
  MONGO_PORT: process.env.MONGO_PORT || 4000
};
