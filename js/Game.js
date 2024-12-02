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
        player1InputNumberAnswer = Number(player1InputNumberAnswer);
        player2InputNumberAnswer = Number(player2InputNumberAnswer);
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
    checkClosestOnSuddenDeath(player1InputNumberAnswer, player2InputNumberAnswer, correctInputAnswer) {
        Math.abs(player1InputNumberAnswer - correctInputAnswer) = absCheckClosestNumberPlayer1;
        Math.abs(player2InputNumberAnswer - correctInputAnswer) = absCheckClosestNumberPlayer2;
        if (absCheckClosestNumberPlayer1 < absCheckClosestNumberPlayer2) {
            player1Points += 1;
        }
        if (absCheckClosestNumberPlayer2 < absCheckClosestNumberPlayer1) {
            player2Points += 1;

        }
    }


    updateScore() {
        player1ScoreElement.innerHTML = player1Points;
        player2ScoreElement.innerHTML = player2Points;
    }
}

