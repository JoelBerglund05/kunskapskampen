export default class GameHandeler {
  constructor() {
    this.gameContainer = document.getElementById("container");
    this.ListTargetNode = document.getElementById("cont");
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
//Ebbes test. ej bra kod. Joel hjälp
  InsertTemplate() {
    const template = document.getElementById("result");
    //const ListParentNode = document.getElementById("result");
    const ListContentNode = template.content.cloneNode(true).firstElementChild;
    this.ListTargetNode.appendChild(ListContentNode);

    const allGames = JSON.parse(sessionStorage.getItem("games"));
    

    const setPoints = template.querySelector("#set-points");
    setPoints.textContent = allGames.games[0].user_points_1;
  }

  DisplayPoints() {

  }


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

  PlayerInfo() {
    playerInfo.winner.points = 5;
    playerInfo.looser.points = 2;
    // if player_points < opponent_points{
    //   playerinfo.player.winner = false (samma men tvärtom för om man vinner) 
    //} 
    let playerInfo = {
      "player": {
        "name": player_name,
        "winner": true,
        "points": points,
      },
      "opponent": {
        "name": opponent_name,
        "winner": false,
        "points": points,
      },
      //bättre
      "game1":{
        "player1": "lasse",
        "player2": "bert",
        "player1_points": "insert points", //lägg till poäng som tas från variabel
        "player1_points": "insert points", //lägg till poäng som tas från variabel        
      },

      "game1":{
        "player1": "lasse",
        "player2": "bert",
        "player1_points": "insert points", //lägg till poäng som tas från variabel
        "player1_points": "insert points", //lägg till poäng som tas från variabel
        //lägg till kod som visar vem som vann baserat på poängen men gör det inte här utan gör det separat
        //färgen ska ändras beroende på vilken sida som vann rött eller grönt
      }
    }
    
  }
//slut på Ebbes kod ;)


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
