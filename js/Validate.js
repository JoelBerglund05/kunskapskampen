export default class Validate {
  constructor() {
    this.emailWrapper = document.getElementById("email-wrapper");
    this.emailInput = document.getElementById("email");
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
  ValidatePassword(form) {
    password1 = form.password1.value;
    password2 = form.password2.value;
  
    if (password1 == "") alert("Please enter Password");
    else if (password2 == "") alert("Please enter confirm password");
    else if (password1 != password2) {
      alert("\nPassword did not match: Please try again...");
      return false;
    } else {
      window.location.href = "sign-in.html";
      return false;
    }
  }  
}
