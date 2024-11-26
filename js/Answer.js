class Answer {
    constructor(){}

    InputAllowNumbersOnly(event){
        if (!/[0-9]/.test(event.key) && event.key !== 'Backspace') {
            event.preventDefault();
        }
    }
}
