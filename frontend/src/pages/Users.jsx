import { useState } from 'react';
import Header from '../components/Header';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ username: '', password: '', roles: '' });

  const addUser = e => {
    e.preventDefault();
    if (!form.username) return;
    setUsers([...users, { ...form, roles: form.roles.split(',').map(r => r.trim()) }]);
    setForm({ username: '', password: '', roles: '' });
  };

  return (
    <div>
      <Header title="Users" />
      <form onSubmit={addUser} className="bg-gray-800 p-4 rounded-2xl mb-4 grid gap-2 sm:grid-cols-4">
        <input
          className="p-2 rounded bg-gray-700 placeholder-gray-400"
          placeholder="Username"
          value={form.username}
          onChange={e => setForm({ ...form, username: e.target.value })}
        />
        <input
          className="p-2 rounded bg-gray-700 placeholder-gray-400"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <input
          className="p-2 rounded bg-gray-700 placeholder-gray-400"
          placeholder="Roles (comma separated)"
          value={form.roles}
          onChange={e => setForm({ ...form, roles: e.target.value })}
        />
        <button className="bg-blue-600 hover:bg-blue-700 rounded-md p-2 text-white" type="submit">Add</button>
      </form>
      <ul className="space-y-2">
        {users.map((u, i) => (
          <li key={i} className="bg-gray-800 p-2 rounded-xl">
            {u.username} - {u.roles.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}
