const targetDate = new Date("2025-02-12T14:00:00").getTime();

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  // Helper function to ensure double digits
  const formatNumber = (number) => (number < 10 ? `0${number}` : number);

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Update the countdown numbers with double digits
  document.getElementById("days").textContent = formatNumber(days);
  document.getElementById("hours").textContent = formatNumber(hours);
  document.getElementById("minutes").textContent = formatNumber(minutes);
  document.getElementById("seconds").textContent = formatNumber(seconds);

  // Update the labels below the countdown numbers
  document.getElementById("daysLabel").textContent = "Days";
  document.getElementById("hoursLabel").textContent = "Hour";
  document.getElementById("minutesLabel").textContent = "Mins";
  document.getElementById("secondsLabel").textContent = "Secs";

  // If the countdown reaches zero, display a message
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").textContent = "Event Started!";
  }
}, 1000);

document.querySelector('.open').addEventListener('click', function() {
  let ripple = document.createElement('div');
  ripple.classList.add('ripple');
  document.body.appendChild(ripple);

  setTimeout(() => {
    window.location.href = "register.html";
  }, 1000); // Redirect after ripple transition
});
