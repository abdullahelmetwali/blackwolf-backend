"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.softDeleteUtility = void 0;
const softDeleteUtility = async (id, Model, modelName, userWhoDelete) => {
    const itemToDelete = await Model.findOne({ _id: id, isDeleted: false });
    if (!itemToDelete) {
        throw new Error(`This ${modelName} is not found`);
    }
    ;
    itemToDelete.set({
        isDeleted: true,
        deletedAt: new Date(),
        deletedBy: userWhoDelete?.fullName
    });
    await itemToDelete.save();
    return itemToDelete.toObject();
};
exports.softDeleteUtility = softDeleteUtility;
//# sourceMappingURL=soft-delete.js.map