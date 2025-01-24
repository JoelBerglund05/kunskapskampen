export default class Template {
    constructor() {
        this.template = document.getElementById("score-template");
        this.clone = document.importNode(template.content, true);

        this. yourScore = 0;
        this. yourCategory1Score = 0;
        this. yourCategory2Score = 0;
        this. yourCategory3Score = 0;
        this. opponentScore = 0;
        this. opponentCategory1Score = 0;
        this. opponentCategory2Score = 0;
        this. opponentCategory3Score = 0;
    }
    templateCreator(){
        clone.querySelector('#yourScore').textContent = yourScore;
        clone.querySelector('#opponentScore').textContent = opponentScore;
        clone.querySelector('#yourCategory1Score').textContent = yourCategory1Score;
        clone.querySelector('#opponentCategory1Score').textContent = opponentCategory1Score;
        clone.querySelector('#yourCategory2Score').textContent = yourCategory2Score;
        clone.querySelector('#opponentCategory2Score').textContent = opponentCategory2Score;
        clone.querySelector('#yourCategory3Score').textContent = yourCategory3Score;
        clone.querySelector('#opponentCategory3Score').textContent = opponentCategory3Score;

        document.getElementById('content').appendChild(clone);
    }
}