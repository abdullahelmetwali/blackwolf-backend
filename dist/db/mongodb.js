"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONNECT_TO_DATA_BASE = CONNECT_TO_DATA_BASE;
const mongoose_1 = require("mongoose");
const env_1 = require("../config/env");
async function CONNECT_TO_DATA_BASE() {
    if (!env_1.DB_URI) {
        throw new Error("Please there is no db uri");
    }
    ;
    try {
        await (0, mongoose_1.connect)(env_1.DB_URI);
        console.log("connected to db now");
    }
    catch (error) {
        console.log(`Error connecting to Database : ${error}`);
    }
}
;
//# sourceMappingURL=mongodb.js.map