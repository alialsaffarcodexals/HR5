import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import cors from 'cors';
import { Server } from 'socket.io';
import http from 'http';

import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import channelRoutes from './routes/channels.js';
import shortcutRoutes from './routes/shortcuts.js';
import gameRoutes from './routes/games.js';

connectDB();
const app = express();
const server = http.createServer(app);
export const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('backend/uploads'));
app.use(
  session({ secret: 'secretkey', resave: false, saveUninitialized: true })
);

io.on('connection', socket => {
  socket.on('join-voice', ({ room }) => {
    socket.join(room);
    socket.to(room).emit('user-joined', socket.id);
    socket.on('signal', data => {
      socket.to(room).emit('signal', { id: socket.id, data });
    });
    socket.on('disconnect', () => {
      socket.to(room).emit('user-left', socket.id);
    });
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/channels', channelRoutes);
app.use('/api/shortcuts', shortcutRoutes);
app.use('/api/games', gameRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on ${PORT}`));
