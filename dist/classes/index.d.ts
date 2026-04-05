import { ValidationErrors } from "../types";
export declare class CustomValidationError {
    name: string;
    message: string;
    statusCode: number;
    errors: ValidationErrors;
    constructor(statusCode: number, errors: ValidationErrors);
}
//# sourceMappingURL=index.d.ts.map