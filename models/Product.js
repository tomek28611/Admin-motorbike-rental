import { Schema, model, models } from "mongoose";


const ProductSchema = new Schema({
    name: String,
    deposit: String,
    pricePerDay: String,
    pricePerWeek: String,
    pricePerMonth: String,
    description: String,

});

export const Product = models.Product || model('Product', ProductSchema);