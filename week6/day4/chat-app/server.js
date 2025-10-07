import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));

const users = new Map();
const rooms = new Map();

function addUser(socketId, username, room) {
  users.set(socketId, { username, room });
  if (!rooms.has(room)) rooms.set(room, new Map());
  rooms.get(room).set(socketId, username);
}

function removeUser(socketId) {
  const u = users.get(socketId);
  if (!u) return null;
  const { room } = u;
  users.delete(socketId);
  const roomMap = rooms.get(room);
  if (roomMap) {
    roomMap.delete(socketId);
    if (roomMap.size === 0) rooms.delete(room);
  }
  return u;
}

function getUsersInRoom(room) {
  const roomMap = rooms.get(room);
  if (!roomMap) return [];
  return Array.from(roomMap.values());
}

io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username, room }, cb) => {
    if (!username || !room) {
      return cb && cb({ status: "error", message: "Username and room required" });
    }

    socket.join(room);

    addUser(socket.id, username, room);

    socket.emit("systemMessage", {
      message: `Welcome ${username}! You joined "${room}"`,
      timestamp: Date.now(),
    });

    socket.to(room).emit("systemMessage", {
      message: `${username} has joined the room.`,
      timestamp: Date.now(),
    });

    io.in(room).emit("roomUsers", {
      room,
      users: getUsersInRoom(room),
    });

    cb && cb({ status: "ok" });
  });

  socket.on("chatMessage", (text, cb) => {
    const u = users.get(socket.id);
    if (!u) return cb && cb({ status: "error", message: "Not in a room" });

    const payload = {
      username: u.username,
      text: text,
      timestamp: Date.now(),
    };

    io.in(u.room).emit("message", payload);
    cb && cb({ status: "ok" });
  });

  socket.on("leaveRoom", (cb) => {
    const u = removeUser(socket.id);
    if (u) {
      socket.leave(u.room);
      io.in(u.room).emit("systemMessage", {
        message: `${u.username} has left the room.`,
        timestamp: Date.now(),
      });
      io.in(u.room).emit("roomUsers", {
        room: u.room,
        users: getUsersInRoom(u.room),
      });
    }
    cb && cb({ status: "ok" });
  });

  socket.on("disconnect", () => {
    const u = removeUser(socket.id);
    if (u) {
      io.in(u.room).emit("systemMessage", {
        message: `${u.username} disconnected.`,
        timestamp: Date.now(),
      });
      io.in(u.room).emit("roomUsers", {
        room: u.room,
        users: getUsersInRoom(u.room),
      });
    }
  });
});

app.get("/health", (req, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));