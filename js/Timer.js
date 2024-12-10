export default class Timer {
    constructor(){
        this.startingTime = 20;
        this.timerElement = document.getElementById('timer');
        this.timerBar = document.getElementById('timer-bar');
    }

    countdownUpdater(event) {
        setInterval(updateCountdown, 1000);
        this.updateCountdown();
        this.updateTimerBar();
        
    }

    updateCountdown() {
        if (startingTime > 0) {
            startingTime = startingTime - 1;
            timerEl.innerHTML = startingTime;
        }
    }

    updateTimerBar() {
        if (timerBar.value > 0) {
            timerBar.value -= 1;
        }
    }
}
