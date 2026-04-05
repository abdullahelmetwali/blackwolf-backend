"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/env");
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const env_1 = require("./config/env");
const mongodb_1 = require("./db/mongodb");
const error_middleware_1 = require("./middlewares/error.middleware");
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const users_route_1 = __importDefault(require("./routes/users.route"));
const cart_route_1 = __importDefault(require("./routes/cart.route"));
const products_route_1 = __importDefault(require("./routes/products.route"));
const inventory_route_1 = __importDefault(require("./routes/inventory.route"));
const categories_route_1 = __importDefault(require("./routes/categories.route"));
const sizes_route_1 = __importDefault(require("./routes/sizes.route"));
const colors_route_1 = __importDefault(require("./routes/colors.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
// CORS
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000", "https://black-wolf-store.vercel.app/"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Authorization", "Content-Type"],
}));
app.get("/api/v1/", (req, res) => {
    res.json({ message: "Hi this is the root" });
});
// routes
app.use("/api/v1/auth", auth_route_1.default);
app.use("/api/v1/users", users_route_1.default);
app.use("/api/v1/cart", cart_route_1.default);
app.use("/api/v1/products", products_route_1.default);
app.use("/api/v1/inventory", inventory_route_1.default);
app.use("/api/v1/categories", categories_route_1.default);
app.use("/api/v1/sizes", sizes_route_1.default);
app.use("/api/v1/colors", colors_route_1.default);
// error handler
app.use(error_middleware_1.ERROR_MIDDLEWARE);
if (process.env.NODE_ENV === "development") {
    app.listen(env_1.PORT, () => {
        console.log(`server is running on : http://localhost:${env_1.PORT}`);
    });
}
(0, mongodb_1.CONNECT_TO_DATA_BASE)().catch((err) => {
    console.error("MongoDB connection failed", err);
});
exports.default = app;
//# sourceMappingURL=app.js.map