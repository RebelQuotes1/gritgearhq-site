
const quotes = [
  "Stay sharp.",
  "Hard times make hard men.",
  "Built to endure.",
  "Survive. Adapt. Overcome.",
  "Your grit is your weapon."
];
const quoteBar = document.getElementById("quoteBar");
setInterval(() => {
  const index = Math.floor(Math.random() * quotes.length);
  quoteBar.textContent = "Quote of the Day: " + quotes[index];
}, 5000);
