  fetch("https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data); 

        const gifsContainer = document.getElementById("gifs");

        data.data.forEach(gif => {
          const img = document.createElement("img");
          img.src = gif.images.fixed_height.url; 
          img.alt = gif.title;
          gifsContainer.appendChild(img);
        });
      })
      .catch(error => {
        console.error("Error fetching data from Giphy API:", error);
      });