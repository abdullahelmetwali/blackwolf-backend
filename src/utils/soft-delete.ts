import { UserTypo } from "../types";

export const softDeleteUtility = async (
    id: string,
    Model: any,
    modelName: string,
    userWhoDelete: UserTypo
) => {
    const itemToDelete = await Model.findOne({ _id: id, isDeleted: false });

    if (!itemToDelete) {
        throw new Error(`This ${modelName} is not found`);
    };

    itemToDelete.set({
        isDeleted: true,
        deletedAt: new Date(),
        deletedBy: userWhoDelete?.name
    });

    await itemToDelete.save();
    return itemToDelete.toObject();
};