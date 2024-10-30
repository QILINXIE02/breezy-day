// Countdown Timer
const targetDate = new Date('2024-11-28T00:00:00-06:00').getTime();
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `Cuenta regresiva para el cumpleaños: ${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(x);
    countdownElement.innerHTML = "¡Es hora de celebrar!";
  }
}

// Update the countdown every second
const x = setInterval(updateCountdown, 1000);
