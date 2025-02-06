import RenderTemplate from "./RenderTemplate.js";

export default class RenderMatch extends RenderTemplate{
    constructor() {
        super({});
        this.template = document.getElementById("score-template");
        this.matchContainer = document.getElementById("content");
    }
    templateCreator(){
        const allGames = JSON.parse(sessionStorage.getItem("games"));
        const gameId = 7;//JSON.parse(sessionStorage.getItem("gameId"));
        for (let i = 0; i < allGames.games.length; i++) {
            if (allGames.games[i].id === gameId) {
                this.Render(this.template, this.matchContainer);
                this.matchContainer.querySelector('#yourScore').textContent = allGames.games[i].user_points_1;
                this.matchContainer.querySelector('#yourName').textContent = allGames.games[i].user_name_1;
                this.matchContainer.querySelector('#opponentScore').textContent = allGames.games[i].user_points_2;        
                this.matchContainer.querySelector('#opponentName').textContent = allGames.games[i].user_name_2;        
            }            
        }
    }
}