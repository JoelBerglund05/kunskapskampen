export default class Timer {
    constructor(){
        this.startingTime = 20;
        this.countdownEl = document.getElementById('timer');
        this.countdownBar = document.getElementById('timer-bar');
    }

    countdownUpdater(event) {
        setInterval(updateCountdown, 1000);
        this.updateCountdown();
        
    }

    updateCountdown() {
        if (startingTime > 0) {
            startingTime = startingTime - 1;
            countdownEl.innerHTML = startingTime;
        }
    }
}
