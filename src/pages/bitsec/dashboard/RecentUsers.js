import { Users, Plus } from "lucide-react"

export default function RecentUsers() {
    const recentUsers = [
        {
            name: "Sarah Johnson",
            email: "sarah@example.com",
            points: 2450,
            status: "Gold",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            name: "Mike Chen",
            email: "mike@example.com",
            points: 1890,
            status: "Silver",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            name: "Emma Davis",
            email: "emma@example.com",
            points: 3200,
            status: "Platinum",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            name: "Alex Rodriguez",
            email: "alex@example.com",
            points: 1250,
            status: "Bronze",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },

        {
            name: "Lisa Wang",
            email: "lisa@example.com",
            points: 2800,
            status: "Gold",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
    ]

    return (
        <div>
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="flex items-center gap-2 font-semibold text-gray-800">
                        <Users className="w-5 h-5 text-indigo-500" />
                        Recent Users
                    </span>
                    <button className="flex items-center px-3 py-1 text-sm rounded-md text-white bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 transition">
                        <Plus className="w-4 h-4 mr-1" />
                        Add User
                    </button>
                </div>
                <p className="text-sm text-gray-500 mb-4">Latest user registrations and activity</p>

                <div className="space-y-3">
                    {recentUsers.map((user, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-between p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                        >
                            <div className="flex items-center gap-3">
                                {user.avatar ? (
                                    <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full border-2 border-indigo-200" />
                                ) : (
                                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-200 to-pink-200 text-gray-700 font-semibold">
                                        {user.name.split(" ").map((n) => n[0]).join("")}
                                    </div>
                                )}
                                <div>
                                    <p className="text-sm font-medium">{user.name}</p>
                                    <p className="text-xs text-gray-500">{user.email}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span
                                    className={`px-2 py-1 text-xs rounded-md font-medium ${user.status === "Platinum"
                                        ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white"
                                        : "bg-gray-200 text-gray-600"
                                        }`}
                                >
                                    {user.status}
                                </span>
                                <p className="text-xs text-gray-500 mt-1 font-medium">{user.points.toLocaleString()} pts</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
