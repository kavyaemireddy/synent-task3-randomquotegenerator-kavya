const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

const API_URL = "https://dummyjson.com/quotes/random";


btn.addEventListener("click", fetchQuote);

async function fetchQuote() {
  loading.classList.remove("hidden");
  error.classList.add("hidden");
  quote.textContent = "";
  author.textContent = "";

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("API error");
    }

    const data = await response.json();

   quote.textContent = `"${data.quote}"`; 
    author.textContent = `- ${data.author}`;

  } catch (err) {
    error.classList.remove("hidden");
  } finally {
    loading.classList.add("hidden");
  }
}
