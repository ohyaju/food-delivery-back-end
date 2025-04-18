"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const FoodSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        default: 0,
    },
    ingredients: [{
            type: [String]
        }],
    categoryID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "category",
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});
exports.Food = mongoose_1.default.model("Food", FoodSchema);
//# sourceMappingURL=Food.js.map