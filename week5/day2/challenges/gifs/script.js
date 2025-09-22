const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

const form = document.getElementById("gifForm");
const searchInput = document.getElementById("searchInput");
const gifsContainer = document.getElementById("gifsContainer");
const deleteAllBtn = document.getElementById("deleteAllBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const category = searchInput.value.trim();
  if (!category) {
    alert("Please enter a category!");
    return;
  }

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${encodeURIComponent(category)}&rating=g`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.data || !data.data.images) {
      alert("No GIF found for this category.");
      return;
    }

    const gifWrapper = document.createElement("div");
    gifWrapper.style.display = "inline-block";
    gifWrapper.style.margin = "10px";

    const img = document.createElement("img");
    img.src = data.data.images.fixed_height.url;
    img.alt = data.data.title || category;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.display = "block";
    deleteBtn.style.marginTop = "5px";


    deleteBtn.addEventListener("click", () => {
      gifWrapper.remove();
    });

    gifWrapper.appendChild(img);
    gifWrapper.appendChild(deleteBtn);
    gifsContainer.appendChild(gifWrapper);

  } catch (error) {
    console.log("ooooooops", error);
    alert("Something went wrong, please try again.");
  }
});

deleteAllBtn.addEventListener("click", () => {
  gifsContainer.innerHTML = "";
});
