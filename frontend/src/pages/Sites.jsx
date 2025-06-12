import { useState } from 'react';
import Header from '../components/Header';

export default function Sites() {
  const [sites, setSites] = useState([]);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const add = e => {
    e.preventDefault();
    if (!name || !url) return;
    setSites([...sites, { name, url }]);
    setName('');
    setUrl('');
  };

  return (
    <div>
      <Header title="Sites" />
      <form onSubmit={add} className="bg-gray-800 p-4 rounded-2xl mb-4 grid gap-2 sm:grid-cols-3">
        <input
          className="p-2 rounded bg-gray-700 placeholder-gray-400"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="p-2 rounded bg-gray-700 placeholder-gray-400"
          placeholder="URL"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md" type="submit">Add</button>
      </form>
      <ul className="space-y-2">
        {sites.map((s, i) => (
          <li key={i} className="bg-gray-800 p-2 rounded-xl">
            <a href={s.url} target="_blank" rel="noreferrer" className="underline">
              {s.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
