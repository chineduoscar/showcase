const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "User",
    joined: "Nov 02, 2026",
  },
  {
    id: 2,
    name: "Mary Smith",
    email: "mary@example.com",
    role: "Admin",
    joined: "Nov 05, 2026",
  },
  {
    id: 3,
    name: "Samuel Okoro",
    email: "samuel@example.com",
    role: "User",
    joined: "Nov 11, 2026",
  },
  {
    id: 4,
    name: "Aisha Bello",
    email: "aisha@example.com",
    role: "User",
    joined: "Nov 18, 2026",
  },
];

const Users = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Users</h1>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                  #
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                  Email
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                  Role
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                  Joined
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {users.map((user, index) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        user.role === "Admin"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {user.joined}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {users.length === 0 && (
          <p className="p-6 text-sm text-gray-500 text-center">
            No users found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Users;
