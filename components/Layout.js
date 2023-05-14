import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Layout({children}) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="">
        <div className="bg-orange-300 w-screen h-screen items-center">
          <div className="">
            <br />
          </div>
          <div className="text-center text-xl font-bold mb-8">Andaman Admin Login Page</div>
          <div className="text-center w-full">
            <button onClick={() => signIn('google')} className="bg-orange-500 p-4 rounded-full font-bold hover:p-6">Login with Google</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-orange-300 min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow mt-2 mr-2 rounded-lg p-4 mb-2"><b>{children}</b>
       
      </div>
    </div>
  );
}