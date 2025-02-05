import DataBase from "./DataBase.js";
import GameHandeler from "./GameHandeler.js";
import Validate from "./Validate.js";
import EventManager from "./EventManager.js";

class Main {
  constructor() {
    this.validate = new Validate();
    this.dataBase = new DataBase();
    this.gameHandeler = new GameHandeler();
    this.eventManager = new EventManager();

    this.btnDBRequest = document.getElementById("btnDBRequest");
    this.displayData = document.getElementById("dBData");
    this.btnCreateAccount = document.getElementById("createAccount");
    this.password = [
      document.getElementById("password1"),
      document.getElementById("password2"),
    ];
    this.btnSignIn = document.getElementById("signIn");
    this.btnCreateGame = document.getElementById("createGame");

    this.container = document.getElementById("container");
    this.answersBtns = [];
  }

  RegisterServiceWorker() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./js/ServiceWorker.js").then((reg) => {
        console.log("Registration succeeded. Scope is " + reg.scope);
      });
    }
  }

  UpdateGameElements() {
    this.container = document.getElementById("container");
    this.answersBtns = [
      this.container.querySelector("#btn-1"),
      this.container.querySelector("#btn-2"),
      this.container.querySelector("#btn-3"),
      this.container.querySelector("#btn-4"),
    ];
  }

  async UrlSpecificLogic() {
    const url = window.location.href;
    const ending = url.substring(url.lastIndexOf("/"));

    if (ending === "/game.html" || ending === "/game.html?") {
      await this.gameHandeler.CreateGameScreen(this.dataBase);
      this.UpdateGameElements();
    }
  }

  async Main() {
    const clickEvent = "click";
    const inputEvent = "input";
    this.RegisterServiceWorker();

    await this.UrlSpecificLogic();

    this.eventManager.EventListener(this.btnCreateAccount, clickEvent, () =>
      this.dataBase.SignUpUser(this.validate.emailInput.value, [
        this.password[0].value,
        this.password[1].value,
      ]),
    );

    this.UpdateGameElements();

    const submitBtn = this.container.querySelector("#submit-btn");

    this.eventManager.EventListener(this.btnCreateGame, clickEvent, () =>
      this.gameHandeler.CreateGame(this.dataBase),
    );

    this.eventManager.EventListener(this.validate.emailInput, inputEvent, () =>
      this.validate.ValidateEmail(),
    );

    if (submitBtn) {
      this.gameHandeler.HandleSubmitLogic(this.answersBtns, submitBtn);
    } else {
      console.error("no button found");
    }
  }
}

const main = new Main();
main.Main();
