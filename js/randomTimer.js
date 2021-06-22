const startingTime = 10;
let time = startingTime * 60;

const countdownEl = document.getElementById('countdownTen');

function countdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
}

countdown();
setInterval(countdown, 1000);
