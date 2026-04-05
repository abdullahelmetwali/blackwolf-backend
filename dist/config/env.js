"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_PORT = exports.JWT_EXPIRES_IN = exports.JWT_SECRET = exports.DB_URI = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
if (process.env.NODE_ENV !== 'production') {
    (0, dotenv_1.config)({ path: `.env.${process.env.NODE_ENV || 'development'}` });
}
_a = process.env, exports.PORT = _a.PORT, exports.DB_URI = _a.DB_URI, exports.JWT_SECRET = _a.JWT_SECRET, _b = _a.JWT_EXPIRES_IN, exports.JWT_EXPIRES_IN = _b === void 0 ? '86400' : _b, exports.API_PORT = _a.API_PORT;
if (!exports.DB_URI || !exports.JWT_SECRET) {
    throw new Error('Missing required environment variables: DB_URI and JWT_SECRET');
}
//# sourceMappingURL=env.js.map