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
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category",
        required: true,
    },
});

export const Food = mongoose.model
    ("Food", FoodSchema);