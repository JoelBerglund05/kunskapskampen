import DataBase from "./DataBase.js";
import GameHandeler from "./GameHandeler.js";
import EventManager from "./EventManager.js";

class Main {
  constructor() {
    this.dataBase = new DataBase();
    this.gameHandeler = new GameHandeler();
    this.eventManager = new EventManager();

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
      //ebbes kod igen
      this.gameHandeler.InsertTemplate("Game-result");
      //slut på ebbes kod
      await this.gameHandeler.CreateGameScreen(this.dataBase);
      this.UpdateGameElements();
    }
  }

  async Main() {
    const clickEvent = "click";
    this.RegisterServiceWorker();

    await this.UrlSpecificLogic();

    this.UpdateGameElements();

    const submitBtn = this.container.querySelector("#submit-btn");

    if (submitBtn) {
      this.gameHandeler.HandleSubmitLogic(this.answersBtns, submitBtn);
    } else {
      console.error("no button found");
    }
  }
}

const main = new Main();
main.Main();
