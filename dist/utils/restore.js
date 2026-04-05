"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restoreUtility = void 0;
const restoreUtility = async (id, Model, modelName) => {
    const itemToRestore = await Model.findOne({ _id: id, isDeleted: true });
    if (!itemToRestore) {
        throw new Error(`This ${modelName} is not found`);
    }
    ;
    itemToRestore.isDeleted = false;
    await itemToRestore.save();
    return itemToRestore.toObject();
};
exports.restoreUtility = restoreUtility;
//# sourceMappingURL=restore.js.map