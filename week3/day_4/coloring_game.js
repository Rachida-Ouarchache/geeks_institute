document.addEventListener("DOMContentLoaded", () => {
  console.log("coloring_game.js chargé");

  const grid = document.getElementById("grid");
  const clearBtn = document.getElementById("clear");
  const colorCells = document.querySelectorAll(".color-cell");

  if (!grid) {
    console.error("Élément #grid introuvable");
    return;
  }

  let currentColor = "black";
  let drawing = false;

  function makeGrid(cols = 50, rows = 30) {
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(${cols}, 16px)`;
    grid.style.gridTemplateRows = `repeat(${rows}, 16px)`;
    for (let i = 0; i < cols * rows; i++) {
      const cell = document.createElement("div");
      cell.className = "grid-cell";
      grid.appendChild(cell);

      cell.addEventListener("mousedown", (e) => {
        e.preventDefault();
        cell.style.backgroundColor = currentColor;
        drawing = true;
      });

      cell.addEventListener("mouseover", () => {
        if (drawing) cell.style.backgroundColor = currentColor;
      });

      cell.addEventListener(
        "touchstart",
        (e) => {
          e.preventDefault();
          cell.style.backgroundColor = currentColor;
        },
        { passive: false }
      );
    }
  }

  makeGrid(50, 30);

  document.addEventListener("mouseup", () => {
    drawing = false;
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      document
        .querySelectorAll(".grid-cell")
        .forEach((c) => (c.style.backgroundColor = "white"));
    });
  }

  colorCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const computed = window.getComputedStyle(cell).backgroundColor;
      currentColor = computed || cell.style.backgroundColor;
      colorCells.forEach((c) => c.classList.remove("active"));
      cell.classList.add("active");
      console.log("couleur sélectionnée:", currentColor);
    });
  });

  if (colorCells.length) {
    colorCells[0].classList.add("active");
    currentColor =
      window.getComputedStyle(colorCells[0]).backgroundColor ||
      colorCells[0].style.backgroundColor;
  }
});
