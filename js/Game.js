import startingTime from "js/Timer.js"
import DataBase from "./DataBase";

export default class Game {
    constructor() {
        this.player1Answer;
        this.player2Answer;
        player1Points = Number(player1Points);
        player2Points = Number(player2Points);
    }

    checkAnswerRight() {
        if (playerAnswer == questionAnswer) {
            player1Points += 1;
        }
    }

    //NOT DONE YET BUDDY!
    checkClosestOnSuddenDeath(target, numbers) {
        return numbers.reduce((prev, curr) => {
            // Compare the absolute difference between current and target
            return (Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev);
        });
    }
}
