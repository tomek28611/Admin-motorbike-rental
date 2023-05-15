
import {Product} from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();

    if (method === 'GET') {
        if (req.query?.id) {
            res.json(await Product.findOne({ _id:req.query.id }))
        } else {
            res.json(await Product.find());
        }}

    if (method === 'POST') {
        const {name, deposit, pricePerDay, pricePerWeek, pricePerMonth, description} = req.body;
        const productDoc = await Product.create({
            name, deposit, pricePerDay, pricePerWeek, pricePerMonth, description
        })
        res.json(productDoc);
    }

    if (method === 'PUT') {
        const { _id, name, deposit, pricePerDay, pricePerWeek, pricePerMonth, description} = req.body;
        await Product.updateOne({ _id }, {name, deposit, pricePerDay, pricePerWeek, pricePerMonth, description});
        res.json(true);
    }
}