
const quotes = [
    "Hard times make hard men.",
    "Prepare today. Survive tomorrow.",
    "Comfort is a slow death.",
    "Fortune favors the gritty."
];
document.addEventListener("DOMContentLoaded", () => {
    const quoteBox = document.getElementById("quote");
    quoteBox.textContent = quotes[Math.floor(Math.random() * quotes.length)];
});
