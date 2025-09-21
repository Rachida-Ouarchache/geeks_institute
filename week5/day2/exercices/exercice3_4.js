// exercice 3
async function fetchStarship() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data.result);
  } catch (error) {
    console.error("An error occurred while fetching the starship:", error.message);
  }
}

fetchStarship();
// exercice 3
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
// OUTPUT:
// calling
// (waits 2 seconds)
// resolved