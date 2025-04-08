import express from "express";
import { createFood, getFood } from "../controller/food";


const foodRouter = express.Router();
foodRouter.post("/",createFood).get("/",getFood)

export {foodRouter}