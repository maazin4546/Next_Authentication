import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";
import SignoutButton from "@/component/signoutButton";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="bg-gray-100">
      <main className="h-full flex items-center justify-center min-h-screen">
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
          <div className="px-10 lg:px-80 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Home Page!</h1>
            <div className="text-lg text-gray-600 mb-6">
              <p>Your session information:</p>
              <pre className="bg-gray-100 p-4 mt-4 rounded-lg text-left">{JSON.stringify(session, null, 2)}</pre>
            </div>
            <SignoutButton />
          </div>
        </div>
      </main>
    </div>
  );
}
