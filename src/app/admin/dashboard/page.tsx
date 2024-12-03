import {
    CustomSession,
    authOptions,
} from "@/app/api/auth/[...nextauth]/options";
import SignoutButton from "@/component/signoutButton";
import { getServerSession } from "next-auth";

export default async function AdminDashboard() {
    const session: CustomSession | null = await getServerSession(authOptions);

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg">
                <div className="p-4">
                    <h2 className="text-2xl font-bold">Admin Panel</h2>
                </div>
                <nav className="mt-4">
                    <ul>
                        <li className="px-4 py-2 hover:bg-gray-200">
                            <a href="#">Dashboard</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200">
                            <a href="#">User Management</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200">
                            <a href="#">Content Moderation</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200">
                            <a href="#">System Settings</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200">
                            <a href="#">Analytics</a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <SignoutButton type="Admin" />
                </header>
                <section className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Welcome, Admin!</h2>
                    <p className="text-gray-600">Here is some dummy information about the admin:</p>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                        <li>Name: John Doe</li>
                        <li>Email: admin@example.com</li>
                        <li>Role: Super Admin</li>
                    </ul>
                </section>
                <section className="mt-6">
                    <h2 className="text-xl font-semibold mb-4">Admin Capabilities:</h2>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                        <li>User Accounts: View, edit, and delete user accounts.</li>
                        <li>Content Moderation: Approve or reject user-generated content.</li>
                        <li>System Settings: Configure application settings and preferences.</li>
                        <li>Analytics and Reports: Access detailed reports and analytics.</li>
                        <li>Notifications: Manage system notifications and alerts.</li>
                        <li>Role Management: Assign and modify user roles and permissions.</li>
                    </ul>
                </section>
            </main>
        </div>
    );
}

