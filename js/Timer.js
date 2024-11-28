export default class Timer {
    constructor(){
        let startingTime = 20;
        const countdownEl = document.getElementById('timer');
        const countdownBar = document.getElementById('timer-bar');
    }

    countdownUpdater(event) {
        setInterval(updateCountdown, 1000);

        updateCountdown(); {
            if (startingTime > 0) {
                startingTime = startingTime - 1;
                countdownEl.innerHTML = startingTime;
            }
        }
    }
}
