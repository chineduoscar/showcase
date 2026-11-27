const recentMessages = [
  { id: 1, name: "John Doe", subject: "Pricing question", time: "2 min ago" },
  {
    id: 2,
    name: "Mary Smith",
    subject: "Partnership inquiry",
    time: "1 hr ago",
  },
  { id: 3, name: "Samuel Okoro", subject: "Bug report", time: "3 hrs ago" },
  { id: 4, name: "Aisha Bello", subject: "Feature request", time: "Yesterday" },
];

const Dashboard = () => {
  // Placeholder numbers, replace with real data from your backend later
  const totalUsers = 1284;
  const totalMessages = 86;
  const totalAdmins = 3;

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

      {/* Totals */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="text-sm text-gray-500">Total Users</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">{totalUsers}</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="text-sm text-gray-500">Total Messages</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">
            {totalMessages}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="text-sm text-gray-500">Total Admins</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">{totalAdmins}</p>
        </div>
      </div>

      {/* Recent messages */}
      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <h2 className="font-semibold text-gray-800">Recent Messages</h2>

        <div className="mt-4 divide-y divide-gray-100">
          {recentMessages.map((message) => (
            <div key={message.id} className="py-3">
              <div className="flex justify-between">
                <p className="text-sm font-medium text-gray-800">
                  {message.name}
                </p>
                <span className="text-xs text-gray-400">{message.time}</span>
              </div>
              <p className="text-sm text-gray-500">{message.subject}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
