import { Request, Response } from "express";
import { Food } from "../schema/Food";

//create food //post
 export const createFood = async (req:Request, res:Response) => {
    const created = await Food.create(req.body);

    res.json({success:true, food: created});
};
//getFood
export const getFood = async (req:Request, res: Response) => {
    const get = await Food.find
     (req.body);
    res.json({success:true, food: get});
};
