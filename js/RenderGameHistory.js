import RenderTemplate from "./RenderTemplate.js";

export default class RenderGameHistory extends RenderTemplate {
  constructor() {
    super({});
    this.gameHistoryContainer = document.getElementById("gameHistory");
  }

  RenderMatchHistory() {
    const allGames = JSON.parse(sessionStorage.getItem("games"));
    const template = document.getElementById("result");

    for (let i = 0; i < allGames.games.length; i++) {
      this.Render(template, this.gameHistoryContainer);

      this.gameHistoryContainer.querySelectorAll(".player")[i].textContent =
        allGames.games[i].user_name_1;
      this.gameHistoryContainer.querySelectorAll(".opponent")[i].textContent =
        allGames.games[i].user_name_2;

      this.gameHistoryContainer.querySelectorAll(".player_points")[
        i
      ].textContent = "Poäng: " + allGames.games[i].user_points_1;
      this.gameHistoryContainer.querySelectorAll(".opponent_points")[
        i
      ].textContent = "Poäng: " + allGames.games[i].user_points_1;
      this.gameHistoryContainer
        .querySelectorAll(".match")
        [i].setAttribute("id", "selectPlayer" + i);
    }
  }

  InsertTemplate() {
    //const ListParentNode = document.getElementById("result");
    const ListContentNode = template.content.cloneNode(true).firstElementChild;
    this.gameHistoryContainer.appendChild(ListContentNode);

    setPoints.textContent = allGames.games[0].user_points_1;
  }

  DisplayPoints() {}

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

  PlayAgainst(index) {
    const allGames = JSON.parse(sessionStorage.getItem("games"));
    sessionStorage.setItem("gameId", allGames.games[index].id);
    window.location.replace("http://127.0.0.1:5501/game.html");
  }
}
