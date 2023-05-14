import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products').then(response => {
            setProducts(response.data);
        });
    }, [])
    return (
        <Layout>
             <Link className="bg-orange-300 rounded-md py-1 px-2" href={'/products/new'}>Add new motorbike</Link>
             <table>
                <thead>
                    <tr>
                        <td>Product name</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>
                                buttons
                            </td>
                        </tr>
                    ))}
                </tbody>
             </table>
        </Layout>
    )
}