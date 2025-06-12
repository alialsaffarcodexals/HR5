import { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import UserManagement from './UserManagement.jsx';

const socket = io('http://localhost:5000');

export default function Dashboard() {
  const [channels, setChannels] = useState({ voices: [], texts: [] });
  const [currentRoom, setCurrentRoom] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/channels').then(r => setChannels(r.data));
  }, []);

  const joinVoice = room => {
    setCurrentRoom(room);
    socket.emit('join-voice', { room });
  };

  return (
    <div className="p-4 grid grid-cols-4 gap-4">
      <div className="col-span-1">
        <h1 className="text-2xl mb-4">مملكة المعرقين</h1>
        <h2 className="text-xl mb-2">Voice Channels</h2>
        <ul className="space-y-2">
          {channels.voices.map(c => (
            <li key={c._id}>
              <button className="w-full bg-gray-700 p-2" onClick={() => joinVoice(c._id)}>{c.name}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-3 space-y-4">
        {currentRoom ? <VoiceRoom room={currentRoom} /> : <p>Select voice room</p>}
        <UserManagement />
      </div>
    </div>
  );
}

function VoiceRoom({ room }) {
  const [peers, setPeers] = useState([]);

  useEffect(() => {
    socket.emit('join-voice', { room });
    socket.on('user-joined', id => setPeers(p => [...p, id]));
    socket.on('user-left', id => setPeers(p => p.filter(x => x !== id)));
    return () => {
      socket.off('user-joined');
      socket.off('user-left');
    };
  }, [room]);

  return (
    <div className="bg-gray-800 p-4">
      <h2 className="text-xl">Room {room}</h2>
      <p>Users: {peers.length + 1}</p>
    </div>
  );
}
