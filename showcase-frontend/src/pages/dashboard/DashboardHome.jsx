const DashboardHome = () => {
  // Reads the user saved at login (adjust the key to match your app)
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const details = [
    { label: "Full Name", value: user.name },
    { label: "Email", value: user.email },
    { label: "Phone", value: user.phone },
    { label: "Joined", value: user.createdAt },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Welcome{user.name ? `, ${user.name}` : ""}
      </h1>

      <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-xl">
        <h2 className="font-semibold text-gray-800">Your Details</h2>

        <div className="mt-4 divide-y divide-gray-100">
          {details.map(({ label, value }) => (
            <div key={label} className="py-3 flex justify-between gap-4">
              <span className="text-sm text-gray-500">{label}</span>
              <span className="text-sm font-medium text-gray-800 text-right wrap-break-words">
                {value || "Not provided"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
