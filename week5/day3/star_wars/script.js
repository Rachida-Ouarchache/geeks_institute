const button = document.getElementById("getCharacter");
const characterDiv = document.getElementById("character");
const loadingDiv = document.getElementById("loading");

async function getRandomCharacter() {
  try {
    characterDiv.innerHTML = "";
    loadingDiv.style.display = "block";

    const randomId = Math.floor(Math.random() * 83) + 1;

    const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
    if (!response.ok) throw new Error("Failed to fetch character data");

    const data = await response.json();
    const char = data.result.properties;

    const worldResponse = await fetch(char.homeworld);
    if (!worldResponse.ok) throw new Error("Failed to fetch homeworld data");

    const worldData = await worldResponse.json();
    const homeworld = worldData.result.properties.name;

    characterDiv.innerHTML = `
      <h2>${char.name}</h2>
      <p><strong>Height:</strong> ${char.height} cm</p>
      <p><strong>Gender:</strong> ${char.gender}</p>
      <p><strong>Birth Year:</strong> ${char.birth_year}</p>
      <p><strong>Home World:</strong> ${homeworld}</p>
    `;
  } catch (error) {
    characterDiv.innerHTML = `
      <div style="color: red; font-weight: bold; margin-top: 20px;">
        ⚠️ Oops! Something went wrong while fetching the data.<br>
        Please try again.
      </div>
    `;
    console.error(error);
  } finally {
    loadingDiv.style.display = "none";
  }
}

button.addEventListener("click", getRandomCharacter);
