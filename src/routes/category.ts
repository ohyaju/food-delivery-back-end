import express from "express";
import { createCategory, getCategory, updateCategory, deleteCategory, getCategoriesWithFoods } from "../controller/category";


const categoryRouter = express.Router();
categoryRouter
    .post("/", createCategory)  // POST /api/v1/category
    .get("/", getCategory)  // GET /api/v1/category
    .get("/with-foods", getCategoriesWithFoods)
    .put("/:id", updateCategory)    // PUT /api/v1/category/:id
    .delete("/:id", deleteCategory) // DELETE /api/v1/category/:id

export { categoryRouter };