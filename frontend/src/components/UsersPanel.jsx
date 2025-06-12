import { useEffect, useState } from 'react';
import api from '../api';

export default function UsersPanel() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ username: '', password: '', roles: '', profileImage: null });
  const [editing, setEditing] = useState(null);
  const [editForm, setEditForm] = useState({ password: '', roles: '', profileImage: null });
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    const { data } = await api.get('/users');
    setUsers(data);
  };

  useEffect(() => { fetchUsers(); }, []);

  const handleAdd = async e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('username', form.username);
    fd.append('password', form.password);
    fd.append('roles', form.roles);
    if (form.profileImage) fd.append('profileImage', form.profileImage);
    try {
      await api.post('/users', fd);
      setForm({ username: '', password: '', roles: '', profileImage: null });
      setError('');
      fetchUsers();
    } catch (err) {
      setError(err.response?.data?.message || 'Error adding user');
    }
  };

  const handleUpdate = async id => {
    const fd = new FormData();
    if (editForm.password) fd.append('password', editForm.password);
    if (editForm.roles) fd.append('roles', editForm.roles);
    if (editForm.profileImage) fd.append('profileImage', editForm.profileImage);
    await api.put(`/users/${id}`, fd);
    setEditing(null);
    setEditForm({ password: '', roles: '', profileImage: null });
    fetchUsers();
  };

  const handleDelete = async id => {
    if (!confirm('Delete user?')) return;
    await api.delete(`/users/${id}`);
    fetchUsers();
  };

  return (
    <div>
      <form onSubmit={handleAdd} className="bg-gray-800 p-4 rounded-2xl mb-4 grid gap-2 sm:grid-cols-5">
        <input
          className="p-2 rounded bg-gray-700 placeholder-gray-400"
          placeholder="Username"
          value={form.username}
          onChange={e => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          className="p-2 rounded bg-gray-700 placeholder-gray-400"
          placeholder="Password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <input
          className="p-2 rounded bg-gray-700 placeholder-gray-400"
          placeholder="Roles (comma separated)"
          value={form.roles}
          onChange={e => setForm({ ...form, roles: e.target.value })}
        />
        <input type="file" onChange={e => setForm({ ...form, profileImage: e.target.files[0] })} />
        <button className="bg-blue-600 hover:bg-blue-700 rounded-md p-2" type="submit">Add</button>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {users.map(u => (
          <div key={u._id} className="bg-gray-800 p-4 rounded-xl">
            <img
              src={`http://localhost:5000/uploads/${u.profileImage}`}
              alt="avatar"
              className="w-16 h-16 rounded-full object-cover mb-2"
            />
            <p className="font-bold">{u.username}</p>
            <p className="text-sm text-gray-400 mb-2">{u.roles.join(', ')}</p>
            {editing === u._id ? (
              <div className="space-y-2">
                <input
                  type="password"
                  className="w-full p-1 rounded bg-gray-700 placeholder-gray-400"
                  placeholder="New Password"
                  value={editForm.password}
                  onChange={e => setEditForm({ ...editForm, password: e.target.value })}
                />
                <input
                  className="w-full p-1 rounded bg-gray-700 placeholder-gray-400"
                  placeholder="Roles"
                  value={editForm.roles}
                  onChange={e => setEditForm({ ...editForm, roles: e.target.value })}
                />
                <input type="file" onChange={e => setEditForm({ ...editForm, profileImage: e.target.files[0] })} />
                <div className="flex gap-2">
                  <button className="bg-blue-600 p-1 rounded" onClick={() => handleUpdate(u._id)}>
                    Save
                  </button>
                  <button className="bg-gray-600 p-1 rounded" onClick={() => setEditing(null)}>
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex gap-2">
                <button className="bg-blue-600 px-2 py-1 rounded" onClick={() => setEditing(u._id)}>
                  Edit
                </button>
                <button className="bg-red-600 px-2 py-1 rounded" onClick={() => handleDelete(u._id)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
