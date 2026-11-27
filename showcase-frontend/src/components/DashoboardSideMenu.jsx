import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const links = [{ to: "/dashboard", label: "Home", end: true }];

const DashboardSideMenu = () => {
  const navigate = useNavigate();

  // Reads the user saved at login (adjust the key to match your app)
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Guest User",
  };
  const initial = (user.name || "G").charAt(0).toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <aside className="w-64 h-screen shrink-0 bg-white border-r border-gray-200 flex flex-col">
      <div className="px-6 py-4 border-b border-gray-200">
        <span className="text-2xl font-bold text-blue-600">Showcase</span>
        <p className="text-xs text-gray-500">My Dashboard</p>
      </div>

      {/* User profile */}
      <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          {initial}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-gray-800 truncate">
            {user.name}
          </p>
          <p className="text-xs text-gray-500 truncate">{user.email}</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1 overflow-hidden">
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-lg transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="px-4 py-4 border-t border-gray-200 space-y-1">
        <NavLink
          to="/"
          className="block px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100"
        >
          ← Back to site
        </NavLink>
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default DashboardSideMenu;
