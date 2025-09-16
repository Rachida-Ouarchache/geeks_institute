searchBox.addEventListener("input", (event) => {
  const searchText = event.target.value.toLowerCase();
  const filtered = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchText)
  );
  displayRobots(filtered);
});
