import { Outlet } from "react-router-dom";
import DashboardSideMenu from "../components/DashoboardSideMenu";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <DashboardSideMenu />
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
