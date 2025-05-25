
const quotes = [
  "Hard times make hard men.",
  "Survival is earned, not given.",
  "Stay ready, so you don't have to get ready.",
  "You don’t rise to the occasion. You sink to your training."
];
let i = 0;
setInterval(() => {
  document.getElementById("quoteBox").textContent = "Quote of the Day: " + quotes[i % quotes.length];
  i++;
}, 6000);
