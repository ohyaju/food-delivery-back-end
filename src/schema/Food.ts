import mongoose from "mongoose"
const FoodSchema = new mongoose.Schema({
    foodname: {type:String },
    price:{ type:Number},
    ingredients: [{type: [String]}],
});

export const Food = mongoose.model("food",
    FoodSchema);