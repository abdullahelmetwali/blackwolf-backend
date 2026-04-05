"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH_MIDDLEWARE = AUTH_MIDDLEWARE;
const get_user_1 = require("../utils/get-user");
async function AUTH_MIDDLEWARE(req, res, next) {
    try {
        const user = await (0, get_user_1.GET_USER)(req);
        if (user instanceof Error) {
            return res.status(401).json({
                message: user?.message
            });
        }
        ;
        const userRole = user.role;
        if (userRole !== "admin") {
            return res.status(403).json({
                message: "Forbidden: You do not have permission to access this resource"
            });
        }
        console.log(userRole);
        next();
    }
    catch (error) {
        return res.status(500).json({
            message: error?.message || "Internal server error in authentication"
        });
    }
}
;
//# sourceMappingURL=auth.middleware.js.map