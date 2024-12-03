'use client'
import { useState } from "react"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Toast from "@/component/Toast";


const Adminlogin = () => {

    const router = useRouter();

    const [authState, setauthState] = useState({
        email: "",
        password: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await signIn("credentials", {
            email: authState.email,
            password: authState.password,
            redirect: false,
        });

        if (data?.status == 200) {
            router.replace("/admin/dashboard");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100">
            <Toast/>
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl w-[450px] border border-white/30">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Admin <span className="text-indigo-600">Login</span>
                </h1>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="block w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm 
                            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                            transition-all duration-200 bg-white/50 backdrop-blur-sm"
                            placeholder="Enter your email"
                            required
                            onChange={(e) => setauthState({ ...authState, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="block w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm 
                            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                            transition-all duration-200 bg-white/50 backdrop-blur-sm"
                            placeholder="Enter your password"
                            required
                            onChange={(e) => setauthState({ ...authState, password: e.target.value })}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 px-6 rounded-xl font-semibold
                            hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                            transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]
                            shadow-lg hover:shadow-xl"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Adminlogin