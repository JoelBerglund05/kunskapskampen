export default class Mail {
  constructor() {
    this.validate = this.validate.bind(this);
    this.init();
  }

  validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  validate() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    const validIcon = document.getElementById("valid-icon");
    const invalidIcon = document.getElementById("invalid-icon");

    emailInput.style.textDecoration = "underline";
    emailInput.style.borderColor = "border";

    // Reset visibility of both icons
    validIcon.classList.add("hidden");
    invalidIcon.classList.add("hidden");

    if (email.length === 0) {
      // If input is empty, hide both icons
      emailInput.style.textDecoration = "none";
      emailInput.style.border = "2px solid oklch(80% 0.0483 138.55)";
      return;
    }

    if (this.validateEmail(email)) {
      // Show valid icon
      validIcon.classList.remove("hidden");
      emailInput.style.textDecoration = "oklch(70% 0.1776 141.88)";
      emailInput.style.border = "2px solid oklch(70% 0.1776 141.88)";
    } else {
      // Show invalid icon
      invalidIcon.classList.remove("hidden");
      emailInput.style.textDecoration = "oklch(70% 0.1776 141.88)";
      emailInput.style.border = "2px solid oklch(60% 0.1825 21.18)";
    }
  }

  init() {
    const emailInput = document.getElementById("email");
    if (emailInput) {
      emailInput.addEventListener("input", this.validate);
    }
  }
}

// To use this class, you would typically import it and create an instance like this:
// import Main from './Main';
// const main = new Main();

/*
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validate = () => {
    const result = document.getElementById('result');
    /*const emailInput = document.querySelector('.email');*/ /*
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    const validIcon = document.getElementById('valid-icon');
    const invalidIcon = document.getElementById('invalid-icon');

    emailInput.style.textDecoration = 'underline';
    emailInput.style.borderColor = 'border';

    // Reset visibility of both icons
    validIcon.classList.add('hidden');
    invalidIcon.classList.add('hidden');

    if (email.length === 0) {
        // If input is empty, hide both icons
        emailInput.style.textDecoration = 'none';
        emailInput.style.border = '2px solid oklch(80% 0.0483 138.55)';
        return;
    }

    if (validateEmail(email)) {
        // Show valid icon
        validIcon.classList.remove('hidden');
        emailInput.style.textDecoration = 'oklch(70% 0.1776 141.88)';
        emailInput.style.border = '2px solid oklch(70% 0.1776 141.88)';
    } else {
        // Show invalid icon
        invalidIcon.classList.remove('hidden');
        emailInput.style.textDecoration = 'oklch(70% 0.1776 141.88)';
        emailInput.style.border = '2px solid oklch(60% 0.1825 21.18)';

    }
};
document.getElementById('email').addEventListener('input', validate)

/*
document.querySelector('.email').addEventListener('input', validate);
*/

/*
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validate = () => {
    const emailInput = document.querySelector('.email');
    const email = emailInput.value;
    const validIcon = document.getElementById('valid-icon');
    const invalidIcon = document.getElementById('invalid-icon');

    // Reset visibility of both icons
    validIcon.classList.add('hidden');
    invalidIcon.classList.add('hidden');

    if (email.length === 0) {
        // If input is empty, hide both icons
        return;
    }

    if (validateEmail(email)) {
        // Show valid icon
        validIcon.classList.remove('hidden');
    } else {
        // Show invalid icon
        invalidIcon.classList.remove('hidden');
    }
};

document.querySelector('.email').addEventListener('input', validate);
*/
