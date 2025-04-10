import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
    {
        categoryName: String,
    },
    {
        timestamps: true,
    }
);
export const Category = mongoose.model
("category", CategorySchema);