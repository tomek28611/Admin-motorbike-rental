import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return <Layout>
    <div className="flex justify-between">
      <div className="text-gray-600">
        <h2 className="">Logged in as :</h2>
        <h2 className="text-lg mt-2">{session?.user?.email}</h2>
      </div>
      <div className="">
        <img className="w-12 h-12 rounded-full" src={session?.user?.image} alt="" />
        <h2 className="bg-orange-300 rounded-lg p-1 text-sm mt-1">{session?.user?.name}</h2>
      </div>
    </div>
  </Layout>;

}