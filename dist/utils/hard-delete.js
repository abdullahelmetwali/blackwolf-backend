"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hardDeleteUtility = void 0;
const hardDeleteUtility = async (id, Model, modelName) => {
    const itemToDelete = await Model.findOne({ _id: id, isDeleted: true });
    if (!itemToDelete) {
        throw new Error(`This ${modelName} is not found`);
    }
    ;
    await Model.deleteOne({ _id: id });
    return itemToDelete.toObject();
};
exports.hardDeleteUtility = hardDeleteUtility;
//# sourceMappingURL=hard-delete.js.map