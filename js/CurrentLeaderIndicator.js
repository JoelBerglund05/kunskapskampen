export default class CurrentLeaderIndicator {
    constructor() {
        this.yourScore = 3;
        this.opponentScore = 1;
    }
    checkCurrentLeader() {
        if (this.yourScore > this.opponentScore) {
            document.querySelector('#yourTotalScore').classList.add('leader');
            document.querySelector('#opponantTotalScore').classList.add('losing');
        }
        else if (this.yourScore < this.opponentScore) {
            document.querySelector('#yourTotalScore').classList.add('losing');
            document.querySelector('#opponantTotalScore').classList.add('leader');
        }
        else {
            document.querySelector('#yourTotalScore').classList.add('losing');
            document.querySelector('#opponantTotalScore').classList.add('losing');
        }
    }
}