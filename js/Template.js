export default class Template {
    constructor() {
        this.template = document.getElementById("score-template");
        this.clone = document.importNode(this.template.content, true);

        this.yourScore = 0;
        this.yourCategory1Score = 0;
        this.yourCategory2Score = 0;
        this.yourCategory3Score = 0;
        this.opponentScore = 0;
        this.opponentCategory1Score = 0;
        this.opponentCategory2Score = 0;
        this.opponentCategory3Score = 0;
    }
    templateCreator(){
        this.clone.querySelector('#yourScore').textContent = this.yourScore;
        this.clone.querySelector('#opponentScore').textContent = this.opponentScore;
        this.clone.querySelector('#yourCategory1Score').textContent = this.yourCategory1Score;
        this.clone.querySelector('#opponentCategory1Score').textContent = this.opponentCategory1Score;
        this.clone.querySelector('#yourCategory2Score').textContent = this.yourCategory2Score;
        this.clone.querySelector('#opponentCategory2Score').textContent = this.opponentCategory2Score;
        this.clone.querySelector('#yourCategory3Score').textContent = this.yourCategory3Score;
        this.clone.querySelector('#opponentCategory3Score').textContent = this.opponentCategory3Score;

        document.getElementById('content').appendChild(this.clone);

        console.log("TEMPLATE");
    }
}