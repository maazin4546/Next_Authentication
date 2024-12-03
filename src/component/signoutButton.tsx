"use client";
import React from "react";
import { signOut } from "next-auth/react";

export default function SignoutButton({ type }: { type?: string }) {
    return (
        <div>
            <button
                className="bg-gray-700 text-white px-3 py-2 font-semibold rounded-md hover:bg-gray-500"
                onClick={() =>
                    signOut({
                        callbackUrl: type == "Admin" ? "/admin/login" : "/login",
                        redirect: true,
                    })
                }
            >
                Sign Out
            </button>
        </div>
    );
}
