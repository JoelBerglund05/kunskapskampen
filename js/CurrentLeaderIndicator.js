export default class CurrentLeaderIndicator {
    constructor() {
        this.yourScore;
        this.opponentScore;
    }
    checkCurrentLeader() {
        this.getGames();
        if (this.yourScore > this.opponentScore) {
            document.querySelector('#yourName').classList.add('leader');
            document.querySelector('#opponentName').classList.add('losing');
        }
        else if (this.yourScore < this.opponentScore) {
            document.querySelector('#yourName').classList.add('losing');
            document.querySelector('#opponentName').classList.add('leader');
        }
        else {
            document.querySelector('#yourName').classList.add('losing');
            document.querySelector('#opponentName').classList.add('losing');
        }
    }
    getGames() {
        const allGames = JSON.parse(sessionStorage.getItem("games"));
        this.yourScore = allGames.games[1].user_points_1;
        this.opponentScore = allGames.games[1].user_points_2;
    }
}