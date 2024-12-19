export default class GameHandeler {
  constructor() {
    this.gameContainer = document.getElementById("container");
    this.questionsAnswerd = 0;
    this.points = 0;
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
    await dataBase.GetQuestion(this.GetRandomCategory());

    this.DeleteQuestionNode();

    const template = document.getElementById("answer-form");
    const questionHtml = template.content.cloneNode(true).firstElementChild;
    this.gameContainer.appendChild(questionHtml);

    this.UpdateGameScreen();
  }

  CreatePointsScreen() {
    this.DeleteQuestionNode();

    const template = document.getElementById("points");

    const pointsHtml = template.content.cloneNode(true).firstElementChild;

    const heading = pointsHtml.querySelector("#points-header");
    const pointsSetter = pointsHtml.querySelector("#set-points");

    pointsSetter.textContent = sessionStorage.getItem("points") + "/10";

    sessionStorage.setItem("questionsAnswerd", 0);
    sessionStorage.setItem("points", 0);

    this.gameContainer.appendChild(pointsHtml);
  }

  UpdateGameScreen() {
    const shuffledAnswers = [0, 1, 2, 3];
    this.ShuffleArray(shuffledAnswers);

    const json = JSON.parse(sessionStorage.getItem("question"));
    this.questionsAnswerd = parseInt(
      sessionStorage.getItem("questionsAnswerd") || 0,
    );

    let questionHtml = this.gameContainer.querySelector(".question-vh");

    const question = questionHtml.querySelector("#question");
    const answersBtn = [
      questionHtml.querySelector("#btn-1"),
      questionHtml.querySelector("#btn-2"),
      questionHtml.querySelector("#btn-3"),
      questionHtml.querySelector("#btn-4"),
    ];

    const answer = [
      json.questions[this.questionsAnswerd].answer1,
      json.questions[this.questionsAnswerd].answer2,
      json.questions[this.questionsAnswerd].answer3,
      json.questions[this.questionsAnswerd].answer4,
    ];

    question.textContent = json.questions[this.questionsAnswerd].question;

    for (let i = 0; i < 4; i++) {
      answersBtn[i].textContent = answer[shuffledAnswers[i]];
    }
  }

  async Sleep(delay) {
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  async ButtonAnswer(answer) {
    const json = JSON.parse(sessionStorage.getItem("question"));
    this.questionsAnswerd = parseInt(
      sessionStorage.getItem("questionsAnswerd") || 0,
    );

    if (json.questions[this.questionsAnswerd].answer1 == answer.outerText) {
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

    if (this.questionsAnswerd < json.questions.length) {
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
        selectedAnswer = btn.innerText;
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
