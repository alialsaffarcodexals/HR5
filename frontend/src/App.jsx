import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserHome from './pages/UserHome';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './context/AuthContext';

export default function App() {
  const { isLoggedIn, role } = useAuth();
  const defaultPath = role === 'admin' ? '/dashboard' : '/home';

  return (
    <Routes>
      <Route path="/login" element={isLoggedIn ? <Navigate to={defaultPath} replace /> : <Login />} />
      <Route element={<ProtectedRoute admin />}> 
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<UserHome />} />
      </Route>
      <Route path="/" element={<Navigate to={defaultPath} replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
