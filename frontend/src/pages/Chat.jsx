import { useState } from 'react';
import Header from '../components/Header';

export default function Chat() {
  const [channels, setChannels] = useState([]);
  const [name, setName] = useState('');

  const add = e => {
    e.preventDefault();
    if (!name) return;
    setChannels([...channels, name]);
    setName('');
  };

  return (
    <div>
      <Header title="Text Channels" />
      <form onSubmit={add} className="bg-gray-800 p-4 rounded-2xl mb-4 flex gap-2">
        <input
          className="flex-1 p-2 rounded bg-gray-700 placeholder-gray-400"
          placeholder="Channel name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md" type="submit">Add</button>
      </form>
      <ul className="space-y-2">
        {channels.map((c, i) => (
          <li key={i} className="bg-gray-800 p-2 rounded-xl">{c}</li>
        ))}
      </ul>
    </div>
  );
}
