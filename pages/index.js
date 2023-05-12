import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
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
    <div className="">
      <div className="">Hello <b>{session.user.name}- {session.user.email}</b>
        <button className="bg-gray-300" onClick={() => signOut()}>SignOut</button>
      </div>
    </div>
  );
}