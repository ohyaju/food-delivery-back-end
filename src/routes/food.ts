import express from "express";
import { createFood,deleteFood, getFood, updateFood } from "../controller/food";


const foodRouter = express.Router();
foodRouter
    .post("/", createFood)  // POST /api/v1/food
    .get("/", getFood)  // GET /api/v1/food
    .put("/:id", updateFood)    // PUT /api/v1/food/:id
    .delete("/:id", deleteFood) // DELETE /api/v1/food/:id

export { foodRouter };