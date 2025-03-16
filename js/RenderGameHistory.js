import RenderTemplate from "./RenderTemplate.js";

export default class RenderGameHistory extends RenderTemplate {
  constructor() {
    super({});
    this.gameHistoryContainer = document.getElementById("gameHistory");
    this.yourScore;
    this.opponentScore;
    
  }

  async RenderMatchHistory() {
    const allGames = JSON.parse(sessionStorage.getItem("games"));
    const template = document.getElementById("result");
    const displayName = JSON.parse(
      localStorage.getItem("sb-quchkaleqfbxkufbskck-auth-token"),
    ).user.user_metadata.display_name;

    for (let i = 0; i < allGames.games.length; i++) {
      this.Render(template, this.gameHistoryContainer);

      if (displayName == allGames.games[i].user_name_1) {
        this.gameHistoryContainer.querySelectorAll(".player")[i].textContent =
          allGames.games[i].user_name_1;
        this.gameHistoryContainer.querySelectorAll(".opponent")[i].textContent =
          allGames.games[i].user_name_2;
        this.gameHistoryContainer.querySelectorAll(".player_points")[
          i
        ].textContent = "Poäng: " + allGames.games[i].user_points_1;
        this.gameHistoryContainer.querySelectorAll(".opponent_points")[
          i
        ].textContent = "Poäng: " + allGames.games[i].user_points_2;
      } else {
        this.gameHistoryContainer.querySelectorAll(".opponent")[i].textContent =
          allGames.games[i].user_name_1;
        this.gameHistoryContainer.querySelectorAll(".player")[i].textContent =
          allGames.games[i].user_name_2;
        this.gameHistoryContainer.querySelectorAll(".opponent_points")[
          i
        ].textContent = "Poäng: " + allGames.games[i].user_points_1;
        this.gameHistoryContainer.querySelectorAll(".player_points")[
          i
        ].textContent = "Poäng: " + allGames.games[i].user_points_2;
      }

      this.gameHistoryContainer
        .querySelectorAll(".match")
        [i].setAttribute("id", "selectPlayer" + i);

      if (
        allGames.games[i].user_name_1 == allGames.games[i].user_turn &&
        displayName == allGames.games[i].user_name_1
      ) {
        this.gameHistoryContainer
          .querySelectorAll(".player")
          [i].classList.add("bold");
      } else if (
        allGames.games[i].user_name_2 == allGames.games[i].user_turn &&
        displayName == allGames.games[i].user_name_2
      ) {
        this.gameHistoryContainer
          .querySelectorAll(".player")
          [i].classList.add("bold");
      } else {
        this.gameHistoryContainer
          .querySelectorAll(".opponent")
          [i].classList.add("bold");
        this.gameHistoryContainer
          .querySelectorAll(".match")
          [i].setAttribute("disabled", "");
      }
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
  }

  getGames() {
    const allGames = JSON.parse(sessionStorage.getItem("games"));
    const gameId = parseInt(sessionStorage.getItem("gameId"));
    let index;
    for (let i = 0; i < allGames.games.length; i++) {
      if (allGames.games[i].id === gameId) {
        index = i;
      }
    }
    this.yourScore = allGames.games[index].user_points_1;
    this.opponentScore = allGames.games[index].user_points_2;
  }

  PlayAgainst(index) {
    const allGames = JSON.parse(sessionStorage.getItem("games"));
    sessionStorage.setItem("gameId", allGames.games[index].id);
    window.location.replace("http://127.0.0.1:5501/game.html");
  }
}
