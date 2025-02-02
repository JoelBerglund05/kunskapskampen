export default class Mail {
    constructor() {
        this.emailWrapper = document.getElementById('email-wrapper');
        this.emailInput = document.getElementById('email');
    }
    validate() {
        if (this.emailInput.value.length === 0) {
            this.emailWrapper.dataset.isEmailCorrect = "NaN";
            return;
        }
        
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.emailInput.value)) {
            this.emailWrapper.dataset.isEmailCorrect = "true"
        } else {
            this.emailWrapper.dataset.isEmailCorrect = "false";
        }
    };
}