const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

const form = document.getElementById("gifForm");
const searchInput = document.getElementById("searchInput");
const gifsContainer = document.getElementById("gifsContainer");
const deleteBtn = document.getElementById("deleteBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  gifsContainer.innerHTML = ""; 

  const category = searchInput.value.trim();
  if (!category) {
    alert("Please enter a category!");
    return;
  }

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(category)}&limit=10`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.data || data.data.length === 0) {
      gifsContainer.innerHTML = "<p>No GIFs found.</p>";
      return;
    }

    data.data.forEach((gif) => {
      const img = document.createElement("img");
      img.src = gif.images.fixed_height.url;
      img.alt = gif.title;
      gifsContainer.appendChild(img);
    });

  } catch (error) {
    console.log("ooooooops", error);
    gifsContainer.innerHTML = "<p>Something went wrong, please try again.</p>";
  }
});

deleteBtn.addEventListener("click", () => {
  gifsContainer.innerHTML = "";
});
