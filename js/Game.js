import startingTime from "js/Timer.js"
import DataBase from "./DataBase";

export default class Game {
    constructor() {
        this.player1Answer;
        player1Points = Number(player1Points);
        player2Points = Number(player2Points);
        this.player1InputNumberAnswer = //Variable of the answer for number inputs
        this.correctInputAnswer = //Variable of the answer for number inputs
        player1InputNumberAnswer = Number(player1InputNumberAnswer);
        correctInputAnswer = Number(correctInputAnswer);
        this.questionAnswer;
        this.playerAnswer;

        this.player1ScoreElement = document.getElementById("player1Score");
        this.player2ScoreElement = document.getElementById("player2Score");
    }

    givePointForRightAnswer() {
        if (playerAnswer == questionAnswer) {
            player1Points += 1;
        }
    }

    //NOT DONE YET BUDDY!
    checkClosestOnSuddenDeath(player1InputNumberAnswer, player2InputNumberAnswer, correctInputAnswer) {
        Math.abs(player1InputNumberAnswer - correctInputAnswer) = absCheckClosestNumberPlayer1;
        Math.abs(/*the other players answer*/ - correctInputAnswer) = absCheckClosestNumberPlayer2;
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

