const robots = [
  { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
  { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
  { id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net" },
  { id: 4, name: "Patricia Lebsack", email: "Julianne.OConner@kory.org" },
  { id: 5, name: "Chelsey Dietrich", email: "Lucio_Hettinger@annie.ca" },
  { id: 6, name: "Nicholas Runolfsdottir", email: "Sherwood@rosamond.me" },
  { id: 7, name: "Kurtis Weissnat", email: "Telly.Hoeger@billy.biz" },
  { id: 8, name: "Glenna Reichert", email: "Chaim_McDermott@dana.io" },
  { id: 9, name: "Clementina DuBuque", email: "Rey.Padberg@karina.biz" }
];

const cardContainer = document.querySelector("#cardContainer");
const searchBox = document.querySelector("#searchBox");

const displayRobots = (robotsList) => {
  cardContainer.innerHTML = ""; 

  robotsList.forEach(({ id, name, email }) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="https://robohash.org/${id}?size=150x150" alt="${name}">
      <h3>${name}</h3>
      <p>${email}</p>
    `;

    cardContainer.appendChild(card);
  });
};

displayRobots(robots);

searchBox.addEventListener("input", (e) => {
  const searchText = e.target.value.toLowerCase().trim();

  if (searchText === "") {
    displayRobots(robots);
    return;
  }

  const exactRobot = robots.find(({ name }) =>
    name.toLowerCase() === searchText
  );

  if (exactRobot) {
    displayRobots([exactRobot]);
    return;
  }

  const filtered = robots.filter(({ name }) =>
    name.toLowerCase().includes(searchText)
  );

  if (filtered.length > 0) {
    displayRobots(filtered);
  } else {
    cardContainer.innerHTML = "<p style='color:white;font-size:1.2rem'>Robot not found</p>";
  }
});
