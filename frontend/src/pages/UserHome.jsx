import { useAuth } from '../context/AuthContext';

export default function UserHome() {
  const { logout } = useAuth();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl mb-4">Welcome</h1>
      <button onClick={logout} className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md">Logout</button>
    </div>
  );
}
