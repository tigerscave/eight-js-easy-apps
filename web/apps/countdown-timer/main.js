'use strict';

{
  function check() {
    let countdown = endTime - new Date().getTime();

  if (countdown < 0) {
    clearInterval(intervalId);
    countdown = 3 * 1000;
    btn.disabled = false;
    btn.classList.remove('inactive');
  }
    const totalSeconds = Math.floor(countdown / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const minutesFormatted = String(minutes).padStart(2, '0');
    const secondsFormatted = String(seconds ).padStart(2, '0');

    timer.textContent = `${minutesFormatted}:${secondsFormatted}`;
  }

    const timer = document.getElementById('timer');
    const btn = document.getElementById('btn');
    let endTime;
    let intervalId;

  btn.addEventListener('click', () => {
    endTime = new Date().getTime() + 3 * 1000;
    btn.disabled = true;
    btn.classList.add('inactive');

    intervalId = setInterval(check, 100);
  });
}