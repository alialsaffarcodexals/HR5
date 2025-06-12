import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <Routes>
      <Route path="/" element={<Navigate to={user ? '/dashboard' : '/login'} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
    </Routes>
  );
}
