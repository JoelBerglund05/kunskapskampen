let startingTime = 20;


const countdownEl = document.getElementById('timer')

setInterval(updateCountdown, 1000);

function updateCountdown() {
    if (startingTime > 0) {
        startingTime = startingTime - 1;
        countdownEl.innerHTML = startingTime;
    }
}