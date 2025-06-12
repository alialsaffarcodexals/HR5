import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserHome from './pages/UserHome';
import Users from './pages/Users';
import Voice from './pages/Voice';
import Chat from './pages/Chat';
import Profiles from './pages/Profiles';
import Games from './pages/Games';
import Sites from './pages/Sites';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './context/AuthContext';

export default function App() {
  const { isLoggedIn, role } = useAuth();
  const defaultPath = role === 'admin' ? '/dashboard/users' : '/home';

  return (
    <Routes>
      <Route path="/login" element={isLoggedIn ? <Navigate to={defaultPath} replace /> : <Login />} />
      <Route element={<ProtectedRoute admin />}>
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route index element={<Navigate to="users" replace />} />
          <Route path="users" element={<Users />} />
          <Route path="voice" element={<Voice />} />
          <Route path="chat" element={<Chat />} />
          <Route path="profiles" element={<Profiles />} />
          <Route path="games" element={<Games />} />
          <Route path="sites" element={<Sites />} />
        </Route>
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<UserHome />} />
      </Route>
      <Route path="/" element={<Navigate to={defaultPath} replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
