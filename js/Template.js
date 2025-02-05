export default class Template {
    constructor() {
        this.template = document.getElementById("score-template");
        this.clone = document.importNode(this.template.content, true);
    }
    templateCreator(){
        const allGames = JSON.parse(sessionStorage.getItem("matches"));
        const gameId = 7;//JSON.parse(sessionStorage.getItem("gameId"));
        for (let i = 0; i < allGames.games.length; i++) {
            if (allGames.games[i].id === gameId) {
                this.clone.querySelector('#yourScore').textContent = allGames.games[i].user_points_1;
                this.clone.querySelector('#yourName').textContent = allGames.games[i].user_name_1;
                this.clone.querySelector('#opponentScore').textContent = allGames.games[i].user_points_2;        
                this.clone.querySelector('#opponentName').textContent = allGames.games[i].user_name_2;        
            }            
        }
        document.getElementById('content').appendChild(this.clone);
    }
}