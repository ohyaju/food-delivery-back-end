import { Request, Response } from "express";
import { Category } from "../schema/Category";

//post category
export const createCategory = async (req: Request, res: Response) => {
  const get = await Category.create
    (req.body);
  res.json({ success: true, createCategory: get });
};
//get category
export const getCategory = async (req: Request, res: Response) => {
  const get = await Category.find
    (req.body);
  res.json({ success: true, getCategory: get });
};
//updateFood
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedata = req.body;
    const updateCategory = await Category.findByIdAndUpdate(id, updatedata, {
      new: true
    });
    res.json({ success: true, message: "updated successfully", food: updateCategory })
  } catch (err) {
    res.status(404).json({ success: false, message: "errror", err })
  }
};

//deleteFood
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteCategory = await Category.findByIdAndDelete(id)

    res.json({ success: true, message: " deleted successfully", food: deleteCategory })
  } catch (err) {
    res.status(404).json({ success: false, message: "errror", err })
  }
};

export const getCategoriesWithFoods = async (req: Request, res: Response) => {
  try {
    console.log(req);

    const categories = await Category.aggregate([
      {
        '$lookup': {
          'from': 'foods',
          'localField': '_id',
          'foreignField': 'categoryID',
          'as': 'foods'
        }
      }
    ]
    );
    res.json({ success: true, categories });
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
};
