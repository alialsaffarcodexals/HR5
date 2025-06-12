import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [roles, setRoles] = useState('');

  const fetchUsers = () =>
    axios.get('http://localhost:5000/api/users').then(r => setUsers(r.data));

  useEffect(() => {
    fetchUsers();
  }, []);

  const add = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/users', { username, password, roles: roles.split(',') });
    setUsername('');
    setPassword('');
    setRoles('');
    fetchUsers();
  };

  return (
    <div>
      <h2 className="text-xl mb-2">Users</h2>
      <form onSubmit={add} className="mb-4 grid grid-cols-4 gap-2">
        <input className="p-2" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input className="p-2" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <input className="p-2" placeholder="Roles comma separated" value={roles} onChange={e => setRoles(e.target.value)} />
        <button className="bg-blue-600" type="submit">Add</button>
      </form>
      <ul>
        {users.map(u => (
          <li key={u._id}>{u.username} - {u.roles.join(', ')}</li>
        ))}
      </ul>
    </div>
  );
}
