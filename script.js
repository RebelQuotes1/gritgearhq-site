
document.addEventListener('DOMContentLoaded', () => {
  const quotes = [
    "Stay sharp.",
    "Hard times make hard men.",
    "Adapt. Overcome. Endure.",
    "Comfort is a killer.",
    "Survive first. Then thrive."
  ];
  const quoteBox = document.getElementById('quote');
  quoteBox.textContent = "Quote of the Day: " + quotes[Math.floor(Math.random() * quotes.length)];
});
