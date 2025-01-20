const template = document.getElementById("score-template");
const clone = document.importNode(template.content, true);

const yourScore = 0;
const opponentScore = 0;

clone.querySelector('p').textContent = '${yourScore}';

document.getElementById('content').appendChild(clone);

console.log('TEMPLATES');