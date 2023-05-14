import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function NewProduct() {
    const [name, setName] = useState('');
    const [deposit, setDeposit] = useState('');
    const [pricePerDay, setPricePerDay] = useState('');
    const [pricePerWeek, setPricePerWeek] = useState('');
    const [pricePerMonth, setPricePerMonth] = useState('');
    const [description, setDescription] = useState('');
    const [goToProducts, setGoToProducts] = useState(false);

    const router = useRouter();

    async function createProduct(ev) {
        ev.preventDefault();
        const data = {
            name,
            deposit,
            pricePerDay,
            pricePerWeek,
            pricePerMonth,
            description
        }
        await axios.post('/api/products', data);
        setGoToProducts(true);
    }
    if (goToProducts) {
        router.push('/products');
    }

    return (
        <Layout>
            <form onSubmit={createProduct}>
                <h1>New Motorbike</h1>
                <label>Motorbike brand and model</label>
                <input
                    className="bg-orange-200 rounded-lg"
                    type="text"
                    placeholder="motorbike brand and model"
                    value={name}
                    onChange={ev => setName(ev.target.value)} />

                <label>Deposit</label>
                <input
                    className="bg-orange-200 rounded-lg"
                    type="text"
                    placeholder="deposit"
                    value={deposit}
                    onChange={ev => setDeposit(ev.target.value)} />

                <label>Price per day</label>
                <input
                    className="bg-orange-200 rounded-lg"
                    type="number"
                    placeholder="price per day"
                    value={pricePerDay}
                    onChange={ev => setPricePerDay(ev.target.value)} />

                <label>Price per week</label>
                <input
                    className="bg-orange-200 rounded-lg"
                    type="number"
                    placeholder="price per week"
                    value={pricePerWeek}
                    onChange={ev => setPricePerWeek(ev.target.value)} />

                <label>Price per month</label>
                <input
                    className="bg-orange-200 rounded-lg"
                    type="number"
                    placeholder="price per month"
                    value={pricePerMonth}
                    onChange={ev => setPricePerMonth(ev.target.value)} />

                <label>Description</label>
                <textarea
                    className="bg-orange-200 rounded-lg"
                    type="text"
                    placeholder="description"
                    value={description}
                    onChange={ev => setDescription(ev.target.value)}
                ></textarea>

                <button type="submit" className="btn-primary ">Save</button>
            </form>
        </Layout>
    )
}