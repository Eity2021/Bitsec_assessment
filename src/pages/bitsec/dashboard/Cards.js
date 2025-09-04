import {
  TrendingUp,
  Users,
  Award,
  Gift,
  DollarSign,
  Zap,
  Star,
} from "lucide-react";
import RecentUsers from "./RecentUsers";
import PopularRewards from "./PopularRewards";

export default function Cards() {
  const stats = [
    {
      title: "Total Users",
      value: "10",
      change: "+12.5%",
      changeIcon: TrendingUp,
      changeColor: "text-green-500",
      icon: Users,
      iconColor: "text-indigo-500",
      bgGradient: "from-indigo-500/20 via-indigo-500/10 to-indigo-500/5",
      border: "border-indigo-500/30",
      shadow: "hover:shadow-indigo-500/20",
      valueGradient: "from-indigo-500 to-indigo-400",
    },
    {
      title: "Points Issued",
      value: "24,580",
      change: "+8.2%",
      changeIcon: Zap,
      changeColor: "text-pink-500",
      icon: Award,
      iconColor: "text-pink-500",
      bgGradient: "from-pink-500/20 via-pink-500/10 to-pink-500/5",
      border: "border-pink-500/30",
      shadow: "hover:shadow-pink-500/20",
      valueGradient: "from-pink-500 to-pink-400",
    },
    {
      title: "Rewards Claimed",
      value: "1,234",
      change: "+15.3%",
      changeIcon: Star,
      changeColor: "text-emerald-500",
      icon: Gift,
      iconColor: "text-emerald-500",
      bgGradient: "from-emerald-500/20 via-emerald-500/10 to-emerald-500/5",
      border: "border-emerald-500/30",
      shadow: "hover:shadow-emerald-500/20",
      valueGradient: "from-emerald-500 to-emerald-400",
    },
    {
      title: "Revenue Impact",
      value: "$12,340",
      change: "+22.1%",
      changeIcon: TrendingUp,
      changeColor: "text-orange-500",
      icon: DollarSign,
      iconColor: "text-orange-500",
      bgGradient: "from-orange-500/20 via-orange-500/10 to-orange-500/5",
      border: "border-orange-500/30",
      shadow: "hover:shadow-orange-500/20",
      valueGradient: "from-orange-500 to-orange-400",
    },
  ];

  return (
    <div>
      <div className="container mx-auto">
        <div className="space-y-6">
          {/* KPI Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const ChangeIcon = stat.changeIcon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${stat.bgGradient} border ${stat.border} rounded-xl p-4 transition-all duration-300 hover:scale-105 ${stat.shadow}`}
                >
                  <div className="flex items-center justify-between pb-2">
                    <p className="text-sm font-medium text-gray-800">
                      {stat.title}
                    </p>
                    <div className={`p-2 ${stat.bgGradient} rounded-lg`}>
                      <Icon className={`h-5 w-5 ${stat.iconColor}`} />
                    </div>
                  </div>
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${stat.valueGradient} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <ChangeIcon className={`w-3 h-3 ${stat.changeColor}`} />
                    <span className={`${stat.changeColor} font-medium`}>
                      {stat.change}
                    </span>{" "}
                    from last month
                  </p>
                </div>
              );
            })}
          </div>
          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Users */}
            <RecentUsers></RecentUsers>
            {/* Popular Rewards */}
            <PopularRewards></PopularRewards>
          </div>
        </div>
      </div>
    </div>
  );
}
