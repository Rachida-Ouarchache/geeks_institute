const params = new URLSearchParams(window.location.search);
const gameId = params.get('gameId');
const userId = params.get('userId');

document.getElementById('gameId').textContent = gameId;
document.getElementById('me').textContent = userId;

const boardEl = document.getElementById('board');
const statusEl = document.getElementById('status');

let polling = null;
let localGame = null;

async function api(path, opts) {
  const res = await fetch(path, opts);
  return res.json();
}

function render(game) {
  localGame = game;
  boardEl.innerHTML = '';
  const size = game.gridSize;
  boardEl.style.gridTemplateColumns = `repeat(${size},40px)`;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const div = document.createElement('div');
      div.className = 'cell';
      if (game.obstacles.some(o => o.x === x && o.y === y)) {
        div.classList.add('ob');
        div.textContent = 'X';
      }
      if (game.bases.p1.x === x && game.bases.p1.y === y) {
        div.classList.add('base1');
        div.textContent = 'B1';
      }
      if (game.bases.p2.x === x && game.bases.p2.y === y) {
        div.classList.add('base2');
        div.textContent = 'B2';
      }
      if (game.players.p1 && game.players.p1.pos.x === x && game.players.p1.pos.y === y) {
        div.classList.add('p1');
        div.textContent = 'P1';
      }
      if (game.players.p2 && game.players.p2.pos.x === x && game.players.p2.pos.y === y) {
        div.classList.add('p2');
        div.textContent = 'P2';
      }
      boardEl.appendChild(div);
    }
  }

  statusEl.textContent = `Status: ${game.status} | Turn: ${game.turn} | Winner: ${game.winner || '-'}`;
}

async function load() {
  const g = await api(`/api/games/${gameId}`);
  if (g.message) { statusEl.textContent = g.message; return; }
  render(g);
}

document.querySelectorAll('#controls button[data-dir]').forEach(b => {
  b.onclick = async () => {
    const dir = b.dataset.dir;
    const resp = await api(`/api/games/${gameId}/action`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ userId, action: 'move', direction: dir})
    });
    if (resp.message) statusEl.textContent = resp.message;
    await load();
  };
});

document.getElementById('attack').onclick = async () => {
  const chosen = await api(`/api/games/${gameId}/action`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ userId, action: 'attack', direction: 'up' }) 
  });
  if (chosen.message) statusEl.textContent = chosen.message;
  await load();
};

load();
polling = setInterval(load, 1000);
