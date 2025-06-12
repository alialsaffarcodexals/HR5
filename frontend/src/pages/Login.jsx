import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const submit = e => {
    e.preventDefault();
    const res = login(username, password);
    if (res.success) {
      navigate(res.role === 'admin' ? '/dashboard' : '/home', { replace: true });
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={submit} className="bg-gray-800 p-8 rounded-xl w-80 space-y-4">
        <h1 className="text-2xl font-bold text-center">تسجيل الدخول</h1>
        <input
          type="text"
          className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <div className="relative">
          <input
            type={showPass ? 'text' : 'password'}
            className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="button" onClick={() => setShowPass(s => !s)} className="absolute inset-y-0 right-0 flex items-center px-2">
            {showPass ? '🙈' : '👁️'}
          </button>
        </div>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded-md">Login</button>
      </form>
    </div>
  );
}
