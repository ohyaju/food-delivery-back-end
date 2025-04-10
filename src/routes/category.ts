import express from "express";
import { createCategory, getCategory,updateCategory,deleteCategory } from "../controller/category";


const categoryRouter = express.Router();
categoryRouter
    .post("/", createCategory)  // POST /api/v1/category
    .get("/", getCategory)  // GET /api/v1/category
    .put("/:id", updateCategory)    // PUT /api/v1/category/:id
    .delete("/:id", deleteCategory) // DELETE /api/v1/category/:id

export { categoryRouter };