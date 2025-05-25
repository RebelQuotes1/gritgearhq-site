
const quotes = [
  "Stay sharp.",
  "Hard times make hard men.",
  "When the grid dies, you don't.",
  "Comfort is a slow death.",
  "Preparedness is power."
];
let i = 0;
setInterval(() => {
  document.getElementById("quoteBox").innerText = "Quote of the Day: " + quotes[i];
  i = (i + 1) % quotes.length;
}, 4000);
