"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadMultiple = exports.uploadSingle = void 0;
const multer_1 = __importDefault(require("multer"));
const classes_1 = require("../classes");
const path_1 = require("path");
const storage = multer_1.default.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads/');
    },
    filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extension = (0, path_1.extname)(file.originalname);
        callback(null, file.originalname.replace(extension, "") + '-' + uniqueSuffix + extension);
    }
});
const filtering = (fieldName) => {
    return (req, file, callback) => {
        // allowed image types
        const allowedTypes = /jpeg|jpg|png|pdf|doc|docx/;
        const extension = allowedTypes.test((0, path_1.extname)(file.originalname).toLowerCase());
        const mimeType = allowedTypes.test(file.mimetype);
        if (mimeType && extension) {
            callback(null, true);
        }
        else {
            callback(new classes_1.CustomValidationError(409, {
                [fieldName]: `Invalid file type. Only ${allowedTypes.source} are allowed`,
            }));
        }
    };
};
const uploadSingle = (fieldName = "image") => {
    const upload = (0, multer_1.default)({
        storage,
        limits: {
            fileSize: 5 * 1024 * 1024 // 5MB MAX
        },
        fileFilter: filtering(fieldName),
    });
    return upload.single(fieldName);
};
exports.uploadSingle = uploadSingle;
const uploadMultiple = (fieldsName = "images", maxCount = 4) => {
    const upload = (0, multer_1.default)({
        storage: storage,
        limits: {
            fileSize: 5 * 1024 * 1024,
        },
        fileFilter: filtering(fieldsName),
    });
    return upload.array(fieldsName, maxCount);
};
exports.uploadMultiple = uploadMultiple;
//# sourceMappingURL=upload.middleware.js.map