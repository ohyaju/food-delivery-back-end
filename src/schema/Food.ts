import mongoose from "mongoose"
const FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        default: 0,
    },
    ingredients: [{
        type: [String]
    }],
    categoryID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true,
    },
});

export const Food = mongoose.model
    ("Food", FoodSchema);