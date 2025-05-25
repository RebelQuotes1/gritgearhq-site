
document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        "Survival is earned, not given.",
        "Prepare now, survive later.",
        "Weakness is a choice. Grit is earned.",
        "The unprepared don't get second chances.",
        "Comfort is the enemy of grit."
    ];
    const quoteEl = document.getElementById("quote");
    setInterval(() => {
        quoteEl.textContent = "Quote of the Day: " + quotes[Math.floor(Math.random() * quotes.length)];
    }, 6000);
});
