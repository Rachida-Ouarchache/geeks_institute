const allBooks = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg",
    alreadyRead: true,
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    image: "https://m.media-amazon.com/images/I/41xShlnTZTL.jpg",
    alreadyRead: false,
  },
];
function displayBooks() {
  const section = document.getElementById("bookList");
  section.innerHTML = ""; // vider la section avant de rajouter (évite les doublons)

  allBooks.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.style.margin = "10px";
    bookDiv.style.padding = "10px";
    bookDiv.style.border = "1px solid #ccc";

    const bookDetails = document.createElement("p");
    bookDetails.textContent = `${book.title} written by ${book.author}`;

    if (book.alreadyRead) {
      bookDetails.style.color = "red";
    }

    const bookImg = document.createElement("img");
    bookImg.src = book.image;
    bookImg.style.width = "100px";

    bookDiv.appendChild(bookDetails);
    bookDiv.appendChild(bookImg);
    section.appendChild(bookDiv);
  });
}