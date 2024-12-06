export default class Template {
    constructor() {
        this.tpl = getElementById('score-template');
        this.clonedTr = tpl.content.cloneNode(true);
    }
    scoreTemplate(){
        clonedTr.querySelectorAll('td').forEach((tdElem, i) => {
            if (i === 0) {
                tdElem.innerText = 'You';
            }
            else {
                tdElem.innerText = 'Opponant';
            }
        });
    
        document.querySelector('table tbody').appendChild(clonedTr);
    }
}