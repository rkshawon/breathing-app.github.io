const circle = document.querySelector(".circle")
const text = document.querySelector("span")

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe In ?';
  circle.className = 'circle grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out !';
      circle.className = 'circle shrink';
    }, 3000);
  }, 1800);
}

setInterval(breathAnimation, 7500);