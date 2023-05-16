import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import Spinner from "./Spinner";

export default function ProductForm({
    _id,
    name: existingName,
    deposit: existingDeposit,
    pricePerDay: existingPricePerDay,
    pricePerWeek: existingPricePerWeek,
    pricePerMonth: existingPricePerMonth,
    description: existingDescription,
    images: existingImages,
}) {
    const [name, setName] = useState(existingName || '');
    const [images, setImages] = useState(existingImages || []);
    const [deposit, setDeposit] = useState(existingDeposit || '');
    const [pricePerDay, setPricePerDay] = useState(existingPricePerDay || '');
    const [pricePerWeek, setPricePerWeek] = useState(existingPricePerWeek || '');
    const [pricePerMonth, setPricePerMonth] = useState(existingPricePerMonth || '');
    const [description, setDescription] = useState(existingDescription || '');
    const [goToProducts, setGoToProducts] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    const router = useRouter();

    async function saveProduct(ev) {
        ev.preventDefault();
        const data = {
            name,
            deposit,
            pricePerDay,
            pricePerWeek,
            pricePerMonth,
            description,
            images
        }
        if (_id) {
            //update
            await axios.put('/api/products', { ...data, _id });
        } else {
            //create
            await axios.post('/api/products', data);
        }
        setGoToProducts(true);
    }
    if (goToProducts) {
        router.push('/products');
    }

    async function uploadImages(ev) {
        const files = ev.target?.files;
        if (files?.length > 0) {
            setIsUploading(true);
            const data = new FormData();
            for (const file of files) {
                data.append('file', file)
            }
            const res = await axios.post('/api/upload', data);
            setImages(oldImages => {
                return [...oldImages, ...res.data.links];
            });
            setIsUploading(false);
        }
    }

    return (
        <form onSubmit={saveProduct}>
            <label>Motorbike brand and model</label>
            <input
                className="bg-orange-200 rounded-lg"
                type="text"
                placeholder="motorbike brand and model"
                value={name}
                onChange={ev => setName(ev.target.value)} />

            <label>Photos</label>
            <div className="mb-2 flex flex-wrap gap-2">
                {images?.map(link => (
                    <div key={link} className="h-24">
                        <img src={link} alt="" className="rounded-md" />
                    </div>
                ))}
                {isUploading && (
                    <div className="h-24">
                        <Spinner />
                    </div>
                )}
                <label className="w-24 h-24 border text-center rounded-lg flex flex-col items-center justify-center text-sm text-gray-500 bg-orange-200 cursor-pointer hover:bg-gray-100 hover:text-black hover:font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    <div>
                        Upload
                    </div>
                    <input type="file" onChange={uploadImages} className="hidden" />
                </label>
  
            </div>

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

    )
}