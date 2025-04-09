import { Request, Response } from "express";
import { Category } from "../schema/Category";

export const createCategory = async (req: Request, res: Response) =>
    {
    try {
        const created = await Category.create(req.body);

        res.status(201).json({success: true, category: created});
    } catch (error: unknown) {
        if (error instanceof Error) {
          res.status(400).json({ success: false, msg: error.message });
        } else {
          res.status(400).json({ success: false, msg: "Unknown error" });
        }
      }
    }      