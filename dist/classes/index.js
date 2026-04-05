"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomValidationError = void 0;
class CustomValidationError {
    constructor(statusCode, errors) {
        this.name = "CustomValidationError";
        this.message = "Validation Error";
        this.statusCode = statusCode;
        this.errors = errors;
    }
}
exports.CustomValidationError = CustomValidationError;
;
//# sourceMappingURL=index.js.map