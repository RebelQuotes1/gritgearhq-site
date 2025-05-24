
const tips = [
  "If you hear birds, you're probably safe. If you hear nothing — be ready.",
  "Always carry a multi-tool. It's worth its weight in gold.",
  "Don’t rely on GPS. Learn to read a map.",
  "Purify your water before drinking. Dysentery is no joke.",
  "If you're not armed, you're already a target."
];

const quotes = [
  "“In the midst of chaos, there is also opportunity.” – Sun Tzu",
  "“By failing to prepare, you are preparing to fail.” – Benjamin Franklin",
  "“It’s better to be a warrior in a garden than a gardener in a war.” – Chinese Proverb",
  "“Survival can be summed up in three words – never give up.” – Bear Grylls",
  "“You never know how strong you are until being strong is your only choice.” – Bob Marley"
];

const gear = [
  { name: "LifeStraw Personal Water Filter", url: "https://amzn.to/3UPVZtC" },
  { name: "Survival Tent Emergency Shelter", url: "https://amzn.to/4dULMfd" },
  { name: "Off-Grid Solar Power Bank", url: "https://amzn.to/4dZVk3Y" }
];

document.getElementById("daily-tip").innerText = tips[Math.floor(Math.random() * tips.length)];
document.getElementById("rotating-quotes").innerText = quotes[Math.floor(Math.random() * quotes.length)];

const gearItem = gear[Math.floor(Math.random() * gear.length)];
document.getElementById("gear-of-day").innerHTML = `<a href="${gearItem.url}" target="_blank">${gearItem.name}</a>`;

const wind = document.getElementById("windAudio");
document.getElementById("muteToggle").onclick = () => {
  wind.muted = !wind.muted;
  document.getElementById("muteToggle").textContent = wind.muted ? "🔇 Unmute Wind" : "🔊 Mute Wind";
};

function updateDoomsdayClock() {
  const now = new Date();
  const apocalypse = new Date("2033-01-01T00:00:00");
  const diff = apocalypse - now;
  const hours = String(Math.floor(diff / 3600000) % 24).padStart(2, "0");
  const minutes = String(Math.floor(diff / 60000) % 60).padStart(2, "0");
  const seconds = String(Math.floor(diff / 1000) % 60).padStart(2, "0");
  document.getElementById("doomsday-timer").textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateDoomsdayClock, 1000);
updateDoomsdayClock();
