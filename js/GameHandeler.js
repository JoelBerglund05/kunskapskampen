import DataBase from "./DataBase.js";
import RenderTemplate from "./RenderTemplate.js";

export default class GameHandeler extends RenderTemplate {
  constructor() {
    super({});
    this.gameContainer = document.getElementById("container");
    this.questionsAnswerd = 0;
    this.points = 0;
    this.myAnswers = [];
  }

  ShuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  GetRandomCategory() {
    const categori = [
      "geografi",
      "Historia",
      "Filmer",
      "Musik",
      "Allmänbildning",
    ];
    const randomQuestion = Math.floor(Math.random() * categori.length);

    return categori[randomQuestion];
  }

  DeleteQuestionNode() {
    const gameScreenParentNode = document.getElementById("container");
    const gameScreenNode = gameScreenParentNode.querySelector(".question-vh");
    const deletedChildNode = gameScreenParentNode.removeChild(gameScreenNode);
  }

  async CreateGameScreen(dataBase) {
    this.DeleteChildNode(this.gameContainer, ".question-vh");

    const template = document.getElementById("answer-form");
    this.Render(template, this.gameContainer);

    this.UpdateGameScreen();
  }

  async CreatePointsScreen() {
    const dataBase = new DataBase();

    await dataBase.AddPoints(this.myAnswers.reverse());

    sessionStorage.setItem("questionsAnswerd", 0);

    window.location.replace("http://127.0.0.1:5501/score.html");
  }

  UpdateGameScreen(dataBase) {
    const shuffledAnswers = [0, 1, 2, 3];
    this.ShuffleArray(shuffledAnswers);

    const gameId = parseInt(sessionStorage.getItem("gameId"));
    const allGames = JSON.parse(sessionStorage.getItem("games"));
    let index;
    this.questionsAnswerd = parseInt(
      sessionStorage.getItem("questionsAnswerd") || 0,
    );

    for (let i = 0; i < allGames.games.length; i++) {
      if (allGames.games[i].id === gameId) {
        index = i;
      }
    }

    let questionHtml = this.gameContainer.querySelector(".question-vh");

    const question = questionHtml.querySelector("#question");
    const answersBtn = [
      questionHtml.querySelector("#btn-1"),
      questionHtml.querySelector("#btn-2"),
      questionHtml.querySelector("#btn-3"),
      questionHtml.querySelector("#btn-4"),
    ];

    const answer = [
      allGames.questions[index][this.questionsAnswerd][0].answer1,
      allGames.questions[index][this.questionsAnswerd][0].answer2,
      allGames.questions[index][this.questionsAnswerd][0].answer3,
      allGames.questions[index][this.questionsAnswerd][0].answer4,
    ];

    question.textContent =
      allGames.questions[index][this.questionsAnswerd][0].question;

    for (let i = 0; i < 4; i++) {
      answersBtn[i].textContent = answer[shuffledAnswers[i]];
      console.log(answer[shuffledAnswers[i]]);
    }
  }

  async Sleep(delay) {
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  async ButtonAnswer(answer) {
    const gameId = parseInt(sessionStorage.getItem("gameId"));
    const allGames = JSON.parse(sessionStorage.getItem("games"));
    let index;
    this.questionsAnswerd = parseInt(
      sessionStorage.getItem("questionsAnswerd") || 0,
    );

    for (let i = 0; i < allGames.games.length; i++) {
      if (allGames.games[i].id === gameId) {
        index = i;
      }
    }

    this.myAnswers.push(answer.outerText);

    if (
      allGames.questions[index][this.questionsAnswerd][0].answer1 ==
      answer.outerText
    ) {
      this.points = sessionStorage.getItem("points");
      this.points++;
      sessionStorage.setItem("points", this.points);

      answer.dataset.isAnswerCorrect = "true";
      await this.Sleep(1500);

      answer.dataset.isAnswerCorrect = "NaN";
    } else {
      answer.dataset.isAnswerCorrect = "false";
      await this.Sleep(1500);
      answer.dataset.isAnswerCorrect = "NaN";
    }

    this.questionsAnswerd++;
    sessionStorage.setItem("questionsAnswerd", this.questionsAnswerd);

    if (this.questionsAnswerd < allGames.questions[index].length) {
      this.UpdateGameScreen();
    } else {
      this.CreatePointsScreen();
    }
  }

  HandleSubmitLogic(answersBtns, submitBtn) {
    let selectedAnswer = null;

    answersBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        answersBtns.forEach((button) => button.classList.remove("selected"));
        btn.classList.add("selected");
        selectedAnswer = btn;
      });
    });

    submitBtn.addEventListener("click", () => {
      if (selectedAnswer) {
        this.ButtonAnswer(selectedAnswer);
        selectedAnswer = null;
        answersBtns.forEach((button) => button.classList.remove("selected"));
      }
    });
  }
}
