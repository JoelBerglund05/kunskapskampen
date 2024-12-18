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


  HandleSubmitButton() {
    let selectedAnswer = null;

    this.answersBtns.forEach((btn) => {
      this.eventManager.EventListener(btn, "click", () => {
        selectedAnswer = btn.outerText; // Store the text of the clicked button
        console.log(`Selected Answer: ${selectedAnswer}`);
      });
    });

    const submitBtn = this.container.querySelector("#submit-btn");
    this.eventManager.EventListener(submitBtn, "click", () => {
      if (selectedAnswer) {
        this.gameHandeler.ButtonAnswer(selectedAnswer);
        selectedAnswer = null;
      } else {
        console.log("no answer");
      }
    });
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
    this.RegisterServiceWorker();
  
    await this.UrlSpecificLogic();
  
    // Update DOM elements and buttons
    this.UpdateGameElements();
  
    // Call the new submit handling function
    this.HandleSubmitButton();
  }
  
}

const main = new Main();
main.Main();
