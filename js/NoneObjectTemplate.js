const template = document.getElementById("score-template");
const clone = document.importNode(template.content, true);

let yourScore = 0;
let yourCategory1Score = 0;
let yourCategory2Score = 0;
let yourCategory3Score = 0;
let opponentScore = 0;
let opponentCategory1Score = 0;
let opponentCategory2Score = 0;
let opponentCategory3Score = 0;

clone.querySelector('#yourScore').textContent = yourScore;
clone.querySelector('#opponentScore').textContent = opponentScore;
clone.querySelector('#yourCategory1Score').textContent = yourCategory1Score;
clone.querySelector('#opponentCategory1Score').textContent = opponentCategory1Score;
clone.querySelector('#yourCategory2Score').textContent = yourCategory2Score;
clone.querySelector('#opponentCategory2Score').textContent = opponentCategory2Score;
clone.querySelector('#yourCategory3Score').textContent = yourCategory3Score;
clone.querySelector('#opponentCategory3Score').textContent = opponentCategory3Score;


document.getElementById('content').appendChild(clone);


console.log('TEMPLATES');