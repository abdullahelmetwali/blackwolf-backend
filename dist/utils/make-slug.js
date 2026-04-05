"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSlug = void 0;
const slugify_1 = __importDefault(require("slugify"));
const makeSlug = async (name, Model) => {
    const baseSlug = (0, slugify_1.default)(name, {
        trim: true,
        strict: true,
        locale: "en"
    });
    let slug = baseSlug;
    let counter = 1;
    while (await Model.exists({ slug })) {
        slug = `${baseSlug}-${counter}`;
        counter++;
    }
    return slug;
};
exports.makeSlug = makeSlug;
//# sourceMappingURL=make-slug.js.map