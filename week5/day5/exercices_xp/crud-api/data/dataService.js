import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function fetchPosts() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("❌ Erreur lors de la récupération des posts :", error.message);
    throw error;
  }
}
