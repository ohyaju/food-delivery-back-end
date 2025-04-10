import { Request, Response } from "express";
import { Food } from "../schema/Food";

//create food //post
 export const createFood = async (req:Request, res:Response) => {
    const created = await Food.create(req.body);

    res.json({success:true, food: created});
};
//getFood
export const getFood = async (req:Request, res: Response) => {
    const get = await Food.find().populate("categoryID");
    res.json({success:true, food: get});
};

//updateFood
export const updateFood = async (req:Request, res: Response) => {
  try{
    const  {id} = req.params;
    const updatedata = req.body;
    const updateFood = await Food.findByIdAndUpdate(id,updatedata,{
      new: true
    });
    res.json({success:true, message: "food updated successfully" , food: updateFood})
  }catch(err){
res.status(404).json({success: false, message: "errror",err})
  }
};

//deleteFood
export const deleteFood = async (req:Request, res: Response) => {
  try{
    const  {id} = req.params;
    const deleteFood = await Food.findByIdAndDelete(id)

    res.json({success:true, message: "food deleted successfully" , food: deleteFood})
  }catch(err){
res.status(404).json({success: false, message: "errror",err})
  }
};


//populate
