import { Gift, Plus } from "lucide-react";

export default function PopularRewards() {
  const recentRewards = [
    {
      name: "50% Off Premium",
      type: "Discount",
      cost: 500,
      claimed: 234,
      total: 500,
    },
    {
      name: "Free Shipping",
      type: "Benefit",
      cost: 200,
      claimed: 456,
      total: 1000,
    },
    {
      name: "$10 Gift Card",
      type: "Voucher",
      cost: 1000,
      claimed: 89,
      total: 200,
    },
    {
      name: "VIP Access",
      type: "Experience",
      cost: 2000,
      claimed: 12,
      total: 50,
    },
  ];

  return (
    <div>
      <div className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg rounded-xl p-4 h-full">
        <div className="flex items-center justify-between mb-2">
          <span className="flex items-center gap-2 font-semibold text-gray-800">
            <Gift className="w-5 h-5 text-pink-500" />
            Popular Rewards
          </span>
          <button className="flex items-center px-3 py-1 text-sm rounded-md text-white bg-gradient-to-r from-pink-500 to-emerald-500 hover:from-pink-600 hover:to-emerald-600 transition">
            <Plus className="w-4 h-4 mr-1" />
            Create Reward
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Most claimed rewards this month
        </p>

        <div className="space-y-3">
          {recentRewards.map((reward, i) => (
            <div
              key={i}
              className="space-y-2 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{reward.name}</p>
                  <p className="text-xs text-gray-500">
                    {reward.type} •{" "}
                    <span className="font-medium text-pink-500">
                      {reward.cost} points
                    </span>
                  </p>
                </div>
                <span className="px-2 py-1 text-xs border border-pink-400 text-pink-500 rounded-md">
                  {reward.claimed}/{reward.total}
                </span>
              </div>
              {/* progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="h-2 bg-pink-500 rounded-full"
                  style={{ width: `${(reward.claimed / reward.total) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
