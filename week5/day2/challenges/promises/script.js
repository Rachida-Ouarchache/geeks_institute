const form = document.getElementById("cityForm");
const results = document.getElementById("results");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  results.innerHTML = "Loading...";

  const lat1 = document.getElementById("lat1").value.trim();
  const lng1 = document.getElementById("lng1").value.trim();
  const lat2 = document.getElementById("lat2").value.trim();
  const lng2 = document.getElementById("lng2").value.trim();

  try {
    const promise1 = fetch(`https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${lng1}&formatted=0`);
    const promise2 = fetch(`https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${lng2}&formatted=0`);

    const [resp1, resp2] = await Promise.all([promise1, promise2]);

    if (!resp1.ok || !resp2.ok) {
      throw new Error("One of the API requests failed");
    }

    const [data1, data2] = await Promise.all([resp1.json(), resp2.json()]);

    const sunrise1 = new Date(data1.results.sunrise).toLocaleTimeString();
    const sunrise2 = new Date(data2.results.sunrise).toLocaleTimeString();

    results.innerHTML = `
      <p>🌅 City 1 Sunrise: ${sunrise1}</p>
      <p>🌅 City 2 Sunrise: ${sunrise2}</p>
    `;

  } catch (error) {
    console.log("ooooooops", error);
    results.innerHTML = "<p>Something went wrong, please try again.</p>";
  }
});
