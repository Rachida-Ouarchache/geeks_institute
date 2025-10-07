// client.js
const socket = io();

const entry = document.getElementById("entry");
const chat = document.getElementById("chat");
const joinBtn = document.getElementById("joinBtn");
const usernameInput = document.getElementById("username");
const roomInput = document.getElementById("room");
const leaveBtn = document.getElementById("leaveBtn");
const roomTitle = document.getElementById("roomTitle");
const usersList = document.getElementById("usersList");
const messagesEl = document.getElementById("messages");
const msgForm = document.getElementById("msgForm");
const msgInput = document.getElementById("msgInput");
const sendBtn = document.getElementById("sendBtn");
const notifSound = document.getElementById("notifSound");

let currentRoom = null;
let currentUser = null;

function enableJoinIfReady() {
  joinBtn.disabled = !(usernameInput.value.trim() && roomInput.value.trim());
}
usernameInput.addEventListener("input", enableJoinIfReady);
roomInput.addEventListener("input", enableJoinIfReady);

joinBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  const room = roomInput.value.trim();
  if (!username || !room) return;
  socket.emit("joinRoom", { username, room }, (resp) => {
    if (resp && resp.status === "ok") {
      currentRoom = room;
      currentUser = username;
      entry.classList.add("hidden");
      chat.classList.remove("hidden");
      roomTitle.textContent = room;
      messagesEl.innerHTML = "";
      appendSystemMessage(`You joined "${room}"`);
    } else {
      alert(resp.message || "Unable to join");
    }
  });
});

leaveBtn.addEventListener("click", () => {
  if (!currentRoom) return;
  socket.emit("leaveRoom", (resp) => {
    currentRoom = null;
    currentUser = null;
    entry.classList.remove("hidden");
    chat.classList.add("hidden");
    usernameInput.value = "";
    roomInput.value = "";
    enableJoinIfReady();
  });
});

msgForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = msgInput.value.trim();
  if (!text) return;
  socket.emit("chatMessage", text, (resp) => {
    if (resp && resp.status === "ok") {
      msgInput.value = "";
      msgInput.focus();
    }
  });
});

socket.on("message", (payload) => {
  const isYou = payload.username === currentUser;
  appendChatMessage(payload.username, payload.text, payload.timestamp, isYou);
  if (!isYou) playNotification();
});

socket.on("systemMessage", (payload) => {
  appendSystemMessage(payload.message);
  playNotification();
});

socket.on("roomUsers", ({ room, users }) => {
  if (room !== currentRoom) return;
  renderUsers(users);
});

function appendChatMessage(username, text, ts, isYou) {
  const div = document.createElement("div");
  div.className = "msg " + (isYou ? "you" : "other");
  const meta = document.createElement("div");
  meta.className = "meta";
  const time = new Date(ts).toLocaleTimeString();
  meta.textContent = `${username} • ${time}`;
  const txt = document.createElement("div");
  txt.className = "text";
  txt.textContent = text;
  div.appendChild(meta);
  div.appendChild(txt);
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function appendSystemMessage(text) {
  const div = document.createElement("div");
  div.className = "msg system";
  div.textContent = text;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function renderUsers(users) {
  usersList.innerHTML = "";
  users.forEach((u) => {
    const li = document.createElement("li");
    li.textContent = u;
    usersList.appendChild(li);
  });
}

function playNotification() {
  try {
    if (notifSound && notifSound.play) notifSound.play().catch(()=>{});
  } catch (e) { /* ignore */ }
}
