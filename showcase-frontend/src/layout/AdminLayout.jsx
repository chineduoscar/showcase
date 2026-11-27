import { Outlet } from "react-router-dom";
import AdminSideMenu from "../components/AdminSideMenu";

const AdminLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <AdminSideMenu />
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
