"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFood = exports.updateFood = exports.getFood = exports.createFood = void 0;
const Food_1 = require("../schema/Food");
//create food //post
const createFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const created = yield Food_1.Food.create(req.body);
    res.json({ success: true, food: created });
});
exports.createFood = createFood;
//getFood
const getFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const get = yield Food_1.Food.find().populate("categoryID");
    res.json({ success: true, food: get });
});
exports.getFood = getFood;
//updateFood
const updateFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedata = req.body;
        const updateFood = yield Food_1.Food.findByIdAndUpdate(id, updatedata, {
            new: true
        });
        res.json({ success: true, message: "food updated successfully", food: updateFood });
    }
    catch (err) {
        res.status(404).json({ success: false, message: "errror", err });
    }
});
exports.updateFood = updateFood;
//deleteFood
const deleteFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleteFood = yield Food_1.Food.findByIdAndDelete(id);
        res.json({ success: true, message: "food deleted successfully", food: deleteFood });
    }
    catch (err) {
        res.status(404).json({ success: false, message: "errror", err });
    }
});
exports.deleteFood = deleteFood;
//populate
//# sourceMappingURL=food.js.map