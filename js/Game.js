import startingTime from "js/Timer.js"
import DataBase from "./DataBase";

export default class Game {
    constructor() {
        this.player1Answer;
        this.player2Answer;
        player1Points = Number(player1Points);
        player2Points = Number(player2Points);
        this.player1InputNumberAnswer = //Variable of the answer for number inputs
        this.player2InputNumberAnswer = //Variable of the answer for number inputs
        this.correctInputAnswer = //Variable of the answer for number inputs
        player1InputNumberAnswer = Number(inputNumberAnswer);
        player2InputNumberAnswer = Number(inputNumberAnswer);
        correctInputAnswer = Number(correctInputAnswer);

        this.player1ScoreElement = document.getElementById("player1Score");
        this.player2ScoreElement = document.getElementById("player2Score");
    }

    checkAnswerRight() {
        if (playerAnswer == questionAnswer) {
            player1Points += 1;
        }
    }

    //NOT DONE YET BUDDY!
    checkClosestOnSuddenDeath() {
        var array = [player1InputNumberAnswer, player2InputNumberAnswer];
        for (correctInputAnswer in array) {
            //WRITE CODE!
        }
    }

    updateScore() {
        player1ScoreElement.innerHTML = player1Points;
        player2ScoreElement.innerHTML = player2Points;
    }
}
