import DataBase from "./DataBase.js";
import GameHandeler from "./GameHandeler.js";
import Validate from "./Validate.js";
import EventManager from "./EventManager.js";
import Template from "./Template.js";
import CurrentLeaderIndicator from "./CurrentLeaderIndicator.js";
import RenderFriendTemplate from "./RenderFriendTemplate.js";
import RenderGameHistory from "./RenderGameHistory.js";

class Main {
  constructor() {
    this.renderFriendTemplate = new RenderFriendTemplate();
    this.validate = new Validate();
    this.dataBase = new DataBase();
    this.gameHandeler = new GameHandeler();
    this.eventManager = new EventManager();
    this.template = new Template();
    this.currentLeaderIndicator = new CurrentLeaderIndicator();
    this.gameHistory = new RenderGameHistory();

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
    this.submitBtn;

    this.btnPlayAgainst;
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
    this.submitBtn = this.container.querySelector("#submit-btn");
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
    } else if (ending === "/friends.html" || ending === "/friends.hrml?") {
      await this.renderFriendTemplate.RenderFriendList(this.dataBase);
      this.btnPlayAgainst = [
        this.renderFriendTemplate.friendContainer.querySelector(
          "#playAgainst0",
        ),
        this.renderFriendTemplate.friendContainer.querySelector(
          "#playAgainst1",
        ),
      ];
      console.log(this.btnPlayAgainst);
    } else if (ending === "/gamelist.html" || ending === "/gamelist.html?") {
      await this.dataBase.GetGames();
      this.gameHistory.RenderMatchHistory();
    }
    else if (ending === "/score.html") {
      await this.dataBase.GetMatch();
      this.template.templateCreator();
      this.currentLeaderIndicator.checkCurrentLeader();
    }
      await this.dataBase.GetMatch();
      this.template.templateCreator();
      this.currentLeaderIndicator.checkCurrentLeader();
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

    this.eventManager.EventListener(this.btnCreateGame, clickEvent, () =>
      this.gameHandeler.CreateGame(this.dataBase),
    );

    this.eventManager.EventListener(this.validate.emailInput, inputEvent, () =>
      this.validate.ValidateEmail(),
    );

    if (this.submitBtn) {
      this.gameHandeler.HandleSubmitLogic(this.answersBtns, submitBtn);
    }

    /*for (let i = 0; i < this.btnPlayAgainst.length; i++) {
      this.eventManager.EventListener(
        this.btnPlayAgainst[i],
        clickEvent,
        () => {
          this.dataBase.CreateFriendGame(i);
        },
      );
    }*/
  }
}

const main = new Main();
main.Main();
