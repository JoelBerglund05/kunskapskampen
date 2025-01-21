const template = document.getElementById("score-template");
const clone = document.importNode(template.content, true);


const yourScore = 0;
const yourCategory1Score = 0;
const opponentScore = 0;

clone.querySelector('#yourScore').textContent = '${yourScore}';
clone.querySelector('#opponentScore').textContent = '${opponentScore}';

document.getElementById('content').appendChild(clone);


console.log('TEMPLATES');