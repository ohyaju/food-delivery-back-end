// import { Request, Response } from "express";
// import { Food } from "../schema/Food";

// //create food //post
//  export const createFood = async (req:Request, res:Response) => {
//     const created = await Food.create(req.body);

//     res.json({success:true, food: created});
// };
// //getFood
// export const getFood = async (req:Request, res: Response) => {
//     const get = await Food.find
//      (req.body);
//     res.json({success:true, food: get});
// };

// //updateFood
// export const updateFood = async (req:Request, res: Response) => {
//     const get = await Food.findByIdAndUpdate
//      (req.body);
//     res.json({success:true, food: get});
// };

  
// //deleteFood
// export const deleteFood = async (req:Request, res: Response) => {
//     const get = await Food.findByIdAndDelete
//      (req.body);
//     res.json({success:true, food: get});
// };


import { Request, Response, NextFunction } from "express";
import { Food } from "../schema/Food";

// create food // POST
export const createFood = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const created = await Food.create(req.body);
    res.status(201).json({ success: true, food: created });
  } catch (error) {
    next(error);  // Алдааг дараагийн error handling middleware-д дамжуулна
  }
};

// getFood // GET
export const getFood = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const foods = await Food.find();  // Бүх хоолыг авах
    res.json({ success: true, food: foods });
  } catch (error) {
    next(error);  // Алдааг дараагийн error handling middleware-д дамжуулна
  }
};

// updateFood // PUT
export const updateFood = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;  // URL параметрээс `id`-г авна
    const updated = await Food.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return next(new Error("Food not found"));
    }
    res.json({ success: true, food: updated });
  } catch (error) {
    next(error);  // Алдааг дараагийн error handling middleware-д дамжуулна
  }
};

// deleteFood // DELETE
export const deleteFood = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;  // URL параметрээс `id`-г авна
    const deleted = await Food.findByIdAndDelete(id);
    if (!deleted) {
      return next(new Error("Food not found"));
    }
    res.json({ success: true, food: deleted });
  } catch (error) {
    next(error);  // Алдааг дараагийн error handling middleware-д дамжуулна
  }
};
