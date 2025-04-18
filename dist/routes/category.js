"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = __importDefault(require("express"));
const category_1 = require("../controller/category");
const categoryRouter = express_1.default.Router();
exports.categoryRouter = categoryRouter;
categoryRouter
    .post("/", category_1.createCategory) // POST /api/v1/category
    .get("/", category_1.getCategory) // GET /api/v1/category
    .get("/with-foods", category_1.getCategoriesWithFoods)
    .put("/:id", category_1.updateCategory) // PUT /api/v1/category/:id
    .delete("/:id", category_1.deleteCategory); // DELETE /api/v1/category/:id
//# sourceMappingURL=category.js.map