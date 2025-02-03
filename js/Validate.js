export default class Validate {
  constructor() {
    this.emailWrapper = document.getElementById("email-wrapper");
    this.emailInput = document.getElementById("email");
    this.passwords = [
      document.getElementById("password1").value,
      document.getElementById("password2").value,
    ];
    this.errorMessages = document.getElementById("error-messages");
  }
  ValidateEmail() {
    if (this.emailInput.value.length === 0) {
      this.emailWrapper.dataset.isEmailCorrect = "NaN";
      return;
    }

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.emailInput.value)) {
      this.emailWrapper.dataset.isEmailCorrect = "true";
    } else {
      this.emailWrapper.dataset.isEmailCorrect = "false";
    }
  }
  ValidatePassword() {
    if (this.passwords[0] == "" || this.passwords[1] == "") {
      this.errorMessages.dataset.errorType = "no";
      return false;
    } else if (this.passwords[0] != this.passwords[1]) {
      this.errorMessages.dataset.errorType = "not-same";
      return false;
    } else if (this.passwords[0].length < 6) {
      this.errorMessages.dataset.errorType = "length";
      return false;
    }

    return true;
  }
}
