import multer, { FileFilterCallback } from 'multer';
import { CustomValidationError } from '../classes';
import { Request } from 'express';
import { extname } from 'path';

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads/');
    },
    filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extension = extname(file.originalname);
        callback(null, file.originalname.replace(extension, "") + '-' + uniqueSuffix + extension);
    }
});

const filtering = (fieldName: string) => {
    return (req: Request, file: Express.Multer.File, callback: FileFilterCallback) => {
        // allowed image types
        const allowedTypes = /jpeg|jpg|png|pdf|doc|docx/;
        const extension = allowedTypes.test(extname(file.originalname).toLowerCase());
        const mimeType = allowedTypes.test(file.mimetype);

        if (mimeType && extension) {
            callback(null, true);
        } else {
            callback(new CustomValidationError(409, {
                [fieldName]: `Invalid file type. Only ${allowedTypes.source} are allowed`,
            }));
        }
    };
};

export const uploadSingle = (fieldName: string = "image") => {
    const upload = multer({
        storage,
        limits: {
            fileSize: 5 * 1024 * 1024 // 5MB MAX
        },
        fileFilter: filtering(fieldName),
    });
    return upload.single(fieldName);
};

export const uploadMultiple = (fieldsName: string = "images", maxCount: number = 4) => {
    const upload = multer({
        storage: storage,
        limits: {
            fileSize: 5 * 1024 * 1024,
        },
        fileFilter: filtering(fieldsName),
    });

    return upload.array(fieldsName, maxCount);
};