import multer from 'multer';
import { uid } from 'uid';
import path from 'path';

const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (request, file, callback) => {
    callback(null, uid() + path.extname(file.originalname));
  }
});

export default multer({ storage });
