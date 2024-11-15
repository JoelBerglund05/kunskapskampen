import DataBase from "./DataBase.js";
import EventManager from "./EventManager.js";
import GameHandeler from "./GameHandeler.js";

class Main {
  constructor() {
    this.dataBase = new DataBase();
    this.eventManager = new EventManager();
    this.gameHandeler = new GameHandeler();
    this.btnDBRequest = document.getElementById("btnDBRequest");
    this.displayData = document.getElementById("dBData");
    this.btnCreateAccount = document.getElementById("createAccount");
    this.email = document.getElementById("email");
    this.password = [
      document.getElementById("password1"),
      document.getElementById("password2"),
    ];
    this.btnSignIn = document.getElementById("signIn");

    this.btnCreateGame = document.getElementById("createGame");
  }
  RegisterServiceWorker() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./js/ServiceWorker.js").then((reg) => {
        console.log("Registration succeeded. Scope is " + reg.scope);
      });
    }
  }
  async DisplayQuestion(id) {
    const DBData = await this.dataBase.GetARowFrom("quizz", id);

    if (DBData !== null) {
      DBData.map((data) => {
        this.displayData.innerHTML = data.questions;
      });
    }
  }

  async DispalyActiveGames() {
    const activeGames = await this.gameHandeler.GetMyActiveGames(this.dataBase);
    const user = await this.dataBase.GetUser();
    let li = document.createElement("li");

    function GetOpponentName(game) {
      if (game.userId1 !== user.id) {
        return game.userId1;
      } else {
        return game.userId2;
      }
    }

    console.log(typeof activeGames, " ", activeGames, user);

    activeGames.forEach((game) => {
      const opponentName = GetOpponentName(game);
      let ul = document.createElement("ul");
      if (opponentName === null) {
        return;
      }
      const ulContent = document.createTextNode(
        "Din motstånadre: " +
          opponentName +
          " Poängen är: " +
          game.player1Points +
          " " +
          game.player2Points,
      );
      ul.appendChild(ulContent);
      li.appendChild(ul);
      console.log(li, ulContent);
    });

    document.body.insertBefore(li, this.btnCreateGame);
  }

  GetCurrentPage() {
    return window.location.pathname.split("/").pop();
  }

  Main() {
    const clickEvent = "click";
    this.eventManager.EventListener(this.tmp, clickEvent, () => {
      console.log(this.dataBase);
    });
    this.RegisterServiceWorker();

    this.eventManager.EventListener(this.btnDBRequest, clickEvent, () =>
      this.DisplayQuestion(1),
    );

    this.eventManager.EventListener(this.btnCreateAccount, clickEvent, () =>
      this.dataBase.SignUpUser(this.email.value, [
        this.password[0].value,
        this.password[1].value,
      ]),
    );

    this.eventManager.EventListener(this.btnSignIn, clickEvent, () =>
      this.dataBase.SignInUser(this.email.value, this.password[0].value),
    );

    this.eventManager.EventListener(this.btnCreateGame, clickEvent, () =>
      this.gameHandeler.CreateGame(this.dataBase),
    );

    if (this.GetCurrentPage() === "active-games") {
      this.DispalyActiveGames();
    }
  }
}

const main = new Main();
main.Main();
