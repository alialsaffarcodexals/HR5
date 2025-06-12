import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const submit = e => {
    e.preventDefault();
    setError('');
    if (username === 'AboSaber' && password === 'AboSaberWebsite') {
      localStorage.setItem('user', JSON.stringify({ username }));
      navigate('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={submit} className="bg-gray-800 p-8 rounded grid gap-4 w-80">
        <input
          className="p-2 bg-gray-700 text-white placeholder-gray-400 rounded"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <div className="relative">
          <input
            className="p-2 bg-gray-700 text-white placeholder-gray-400 rounded w-full"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(s => !s)}
            className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-300"
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button className="bg-blue-600 p-2 rounded" type="submit">Login</button>
      </form>
    </div>
  );
}
