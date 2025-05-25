document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    "Stay sharp.",
    "Survival is earned, not given.",
    "Comfort is a slow death.",
    "Grit beats gear when gear fails.",
    "Hope is not a strategy."
  ];
  const quoteBox = document.getElementById("quoteBox");
  let i = 0;
  setInterval(() => {
    quoteBox.textContent = "Quote of the Day: " + quotes[i % quotes.length];
    i++;
  }, 6000);
});