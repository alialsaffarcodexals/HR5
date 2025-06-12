import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { logout } = useAuth();
  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      <aside className="w-64 bg-gray-800 p-4 space-y-4">
        <h1 className="text-2xl font-bold mb-6">مملكة المعرقين</h1>
        <nav className="space-y-2">
          <a className="block p-2 hover:bg-gray-700 rounded" href="#">Users</a>
          <a className="block p-2 hover:bg-gray-700 rounded" href="#">Voice</a>
          <a className="block p-2 hover:bg-gray-700 rounded" href="#">Chat</a>
          <a className="block p-2 hover:bg-gray-700 rounded" href="#">Profiles</a>
          <a className="block p-2 hover:bg-gray-700 rounded" href="#">Games</a>
          <a className="block p-2 hover:bg-gray-700 rounded" href="#">Sites</a>
        </nav>
        <button onClick={logout} className="text-sm text-gray-400 hover:text-white">Logout</button>
      </aside>
      <main className="flex-1 p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 p-4 rounded-xl text-center">Content 1</div>
          <div className="bg-gray-800 p-4 rounded-xl text-center">Content 2</div>
          <div className="bg-gray-800 p-4 rounded-xl text-center">Content 3</div>
        </div>
      </main>
    </div>
  );
}
