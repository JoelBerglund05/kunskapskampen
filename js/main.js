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

    this.tmp = document.getElementById("tmp");
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
    const activeGames = await this.dataBase.GetAllActiveGames();
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
      this.dataBase.SignUpUser(this.email, this.password),
    );

    this.eventManager.EventListener(this.btnSignIn, clickEvent, () =>
      this.dataBase.SignInUser(this.email, this.password),
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
