
import {Product} from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();

    if (method === 'GET') {
        res.json(await Product.find());
    }

    if (method === 'POST') {
        const {name, deposit, pricePerDay, pricePerWeek, pricePerMonth, description} = req.body;
        const productDoc = await Product.create({
            name, deposit, pricePerDay, pricePerWeek, pricePerMonth, description
        })
        res.json(productDoc);
    }
}