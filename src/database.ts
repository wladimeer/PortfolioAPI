import mongoose, { ConnectOptions } from 'mongoose';
import config from './config';

(async () => {
  try {
    const connectOptions: ConnectOptions = {
      // user: config.MONGO_USER,
      // pass: config.MONGO_PASSWORD
    };

    const database = await mongoose.connect(
      `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,
      connectOptions
    );

    console.log('Connected to', database.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
