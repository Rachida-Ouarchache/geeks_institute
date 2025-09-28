import axios from "axios";

async function fetchData() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const posts = response.data;

    console.log("Fetched posts:");
    posts.forEach((post) => console.log(`- ${post.title}`));
  } catch (err) {
    console.error("Error fetching data:", err.message);
  }
}

export default fetchData;
