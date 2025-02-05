import RenderTemplate from "./RenderTemplate.js";

export default class RenderGameHistory extends RenderTemplate{

    constructor() {
        super({})
        this.gameHistoryContainer = document.getElementById("gameHistory");
    }

    RenderMatchHistory() {
        const allGames = JSON.parse(sessionStorage.getItem("games"));
        const template = document.getElementById("result");

        for(let i = 0; i < allGames.games.length; i++){
            this.Render(template, this.gameHistoryContainer);

            this.gameHistoryContainer.querySelectorAll(".player")[i].textContent = allGames.games[i].user_name_1;
            this.gameHistoryContainer.querySelectorAll(".opponent")[i].textContent = allGames.games[i].user_name_2;
            
            this.gameHistoryContainer.querySelectorAll(".player_points")[i].textContent = "Poäng: " + allGames.games[i].user_points_1;
            this.gameHistoryContainer.querySelectorAll(".opponent_points")[i].textContent = "Poäng: " + allGames.games[i].user_points_1;

        }
    }

    InsertTemplate() {
        //const ListParentNode = document.getElementById("result");
        const ListContentNode = template.content.cloneNode(true).firstElementChild;
        this.gameHistoryContainer.appendChild(ListContentNode);
    
        
    
        setPoints.textContent = allGames.games[0].user_points_1;
      }
    
      DisplayPoints() {
    
      }
    
    
      ColorDisplay() {
        const match = document.getElementById("match");
    
    
        /*
        if (player_1.point > player_2.point) {
          match.style.borderBlockStart = "2px solid oklch(70% 0.1776 141.88)";
          match.style.borderBlockEnd = "2px solid oklch(60% 0.1825 21.18)"
        }
        if else (player_1.point < player_2.point){
          match.style.borderBlockStart = "2px solid oklch(60% 0.1825 21.18)";
          match.style.borderBlockEnd = "2px solid oklch(70% 0.1776 141.88)"
        }
        if else (player_1.point == player_2.point) {
          match.style.borderBlockStart = ""
          match.style.borderBlockEnd = ""
        }
    
        */
    
      }
    
      PlayerInfo() {
        playerInfo.winner.points = 5;
        playerInfo.looser.points = 2;
        // if player_points < opponent_points{
        //   playerinfo.player.winner = false (samma men tvärtom för om man vinner) 
        //} 
        let playerInfo = {
          "player": {
            "name": player_name,
            "winner": true,
            "points": points,
          },
          "opponent": {
            "name": opponent_name,
            "winner": false,
            "points": points,
          },
          //bättre
          "game1":{
            "player1": "lasse",
            "player2": "bert",
            "player1_points": "insert points", //lägg till poäng som tas från variabel
            "player1_points": "insert points", //lägg till poäng som tas från variabel        
          },
    
          "game1":{
            "player1": "lasse",
            "player2": "bert",
            "player1_points": "insert points", //lägg till poäng som tas från variabel
            "player1_points": "insert points", //lägg till poäng som tas från variabel
            //lägg till kod som visar vem som vann baserat på poängen men gör det inte här utan gör det separat
            //färgen ska ändras beroende på vilken sida som vann rött eller grönt
          }
        }
        
      }
}