import Layout from "@/components/Layout";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Logout() {
    return (
        <Layout>
            <div className="text-center mt-8">
                <div className="">
                    You sure ?
                </div>
                <div className="mt-4 ">
                    <button className="bg-red-500 text-white mr-2 p-2 rounded-lg" onClick={() => signOut()}>Yes</button>
                    <Link href="/">
                        <button className="bg-gray-400 p-2 rounded-lg">No</button>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}