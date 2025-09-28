// date.js

export function nextHoliday() {
  const now = new Date();

  // Hardcode : Noël 🎄
  const holidayName = "Christmas";
  const holidayDate = new Date("2025-12-25T00:00:00");

  // Calcul du temps restant en millisecondes
  const diff = holidayDate - now;

  if (diff <= 0) {
    return `Today is already ${holidayName}! 🎉`;
  }

  // Convertir en jours, heures, minutes, secondes
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return `
    Today is ${now.toDateString()}.
    The next holiday is ${holidayName}, in ${days} days and ${hours}:${minutes}:${seconds}.
  `;
}
