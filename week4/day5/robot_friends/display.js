const cardContainer = document.getElementById("cardContainer");
const searchBox = document.getElementById("searchBox");

function displayRobots(filteredRobots) {
  cardContainer.innerHTML = ""; 
  filteredRobots.forEach(robot => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="https://robohash.org/${robot.id}?size=150x150" alt="${robot.name}">
      <h3>${robot.name}</h3>
      <p>${robot.email}</p>
    `;
    cardContainer.appendChild(card);
  });
}

displayRobots(robots);
