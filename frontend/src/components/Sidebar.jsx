import { NavLink } from 'react-router-dom';
import { Users, Mic, MessageSquare, UserCircle, Gamepad2, Globe, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Sidebar() {
  const { logout } = useAuth();

  const links = [
    { to: '/dashboard/users', label: 'Users', icon: Users },
    { to: '/dashboard/voice', label: 'Voice', icon: Mic },
    { to: '/dashboard/chat', label: 'Chat', icon: MessageSquare },
    { to: '/dashboard/profiles', label: 'Profiles', icon: UserCircle },
    { to: '/dashboard/games', label: 'Games', icon: Gamepad2 },
    { to: '/dashboard/sites', label: 'Sites', icon: Globe }
  ];

  return (
    <aside className="bg-gray-800 text-gray-300 w-60 fixed inset-y-0 left-0 p-4 space-y-4">
      <h1 className="text-2xl font-bold text-white mb-6">مملكة المعرقين</h1>
      <nav className="space-y-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700 text-white' : ''}`
            }
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <button
        onClick={logout}
        className="flex items-center gap-2 p-2 text-sm text-gray-400 hover:text-white"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </button>
    </aside>
  );
}
