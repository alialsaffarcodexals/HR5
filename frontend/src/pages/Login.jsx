import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = async e => {
    e.preventDefault();
    const { data } = await axios.post('http://localhost:5000/api/auth/login', {
      username,
      password,
    });
    localStorage.setItem('user', JSON.stringify(data.user));
    window.location.href = '/';
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={submit} className="bg-gray-800 p-8 rounded grid gap-4">
        <input className="p-2" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input className="p-2" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="bg-blue-600 p-2" type="submit">Login</button>
      </form>
    </div>
  );
}
