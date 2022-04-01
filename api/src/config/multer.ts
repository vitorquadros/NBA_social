import { randomBytes } from 'crypto';
import { Options, diskStorage } from 'multer';
import { resolve } from 'path';

export const multerConfig = {
  dest: resolve(__dirname, '..', '..', 'public', 'uploads'),
  storage: diskStorage({
    destination: (request, file, callback) => {
      callback(null, resolve(__dirname, '..', '..', 'public', 'uploads'));
    },
    filename: (request, file, callback) => {
      randomBytes(16, (error, hash) => {
        if (error) callback(error, file.filename);
        const filename = `${hash.toString('hex')}.jpg`;
        callback(null, filename);
      });
    }
  }),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5 MB
  },
  fileFilter: (request, file, callback) => {
    const formats = ['image/jpeg', 'image/jpg', 'image/png'];

    if (formats.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error('Invalid format'));
    }
  }
} as Options;
