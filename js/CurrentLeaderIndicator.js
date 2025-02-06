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
        const gameId = parseInt(sessionStorage.getItem("gameId"));
        let index;
        for (let i = 0; i < allGames.games.length; i++){
            if (allGames.games[i].id ===gameId) {
              index = i;
            }
          }
        this.yourScore = allGames.games[index].user_points_1;
        this.opponentScore = allGames.games[index].user_points_2;
    }
}