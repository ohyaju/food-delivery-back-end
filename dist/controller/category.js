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
exports.getCategoriesWithFoods = exports.deleteCategory = exports.updateCategory = exports.getCategory = exports.createCategory = void 0;
const Category_1 = require("../schema/Category");
//post category
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const get = yield Category_1.Category.create(req.body);
    res.json({ success: true, createCategory: get });
});
exports.createCategory = createCategory;
//get category
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const get = yield Category_1.Category.find(req.body);
    res.json({ success: true, getCategory: get });
});
exports.getCategory = getCategory;
//updateFood
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedata = req.body;
        const updateCategory = yield Category_1.Category.findByIdAndUpdate(id, updatedata, {
            new: true
        });
        res.json({ success: true, message: "updated successfully", food: updateCategory });
    }
    catch (err) {
        res.status(404).json({ success: false, message: "errror", err });
    }
});
exports.updateCategory = updateCategory;
//deleteFood
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleteCategory = yield Category_1.Category.findByIdAndDelete(id);
        res.json({ success: true, message: " deleted successfully", food: deleteCategory });
    }
    catch (err) {
        res.status(404).json({ success: false, message: "errror", err });
    }
});
exports.deleteCategory = deleteCategory;
const getCategoriesWithFoods = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req);
        const categories = yield Category_1.Category.aggregate([
            {
                '$lookup': {
                    'from': 'foods',
                    'localField': '_id',
                    'foreignField': 'categoryID',
                    'as': 'foods'
                }
            }
        ]);
        res.json({ success: true, categories });
    }
    catch (error) {
        res.status(404).json({ success: false, error: error.message });
    }
});
exports.getCategoriesWithFoods = getCategoriesWithFoods;
//# sourceMappingURL=category.js.map