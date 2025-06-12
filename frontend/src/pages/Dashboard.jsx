import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="bg-[#0f172a] min-h-screen pl-60 text-white">
      <Sidebar />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
